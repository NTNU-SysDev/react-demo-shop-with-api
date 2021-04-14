package no.aronmn.shop.controller;

import java.util.List;
import java.util.Optional;
import javax.validation.Valid;
import no.aronmn.shop.entity.Product;
import no.aronmn.shop.repository.ProductRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/product")
/**
 * Product management API. This class describes the different REST API endpoints.
 * @GetMapping means that the method responds to HTTP GET request,
 * @PostMapping responds to HTTP POST request
 * @DeleteMapping responds to HTTP DELETE request
 */
public class ProductController {

    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    /**
     * Get a list of all products stored in the system
     * @return
     */
    @GetMapping
    public ResponseEntity<List<Product>> getAll() {
        return new ResponseEntity<>(this.productRepository.findAll(), HttpStatus.OK);
    }

    /**
     * Add a product to the database. The product details must be included in the request body, encoded in JSON format
     * @param httpEntity HTTP request
     * @return HTTP OK on success, a surprise on error :)
     */
    @PostMapping
    public ResponseEntity<Void> addProduct(HttpEntity<String> httpEntity) {
        String body = httpEntity.getBody();
        if (body != null) {
            JSONObject jsonObject = new JSONObject(body);
            this.productRepository.save(new Product(
                jsonObject.getString("name"),
                jsonObject.getString("description"),
                jsonObject.getInt("price")
            ));
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.I_AM_A_TEAPOT);
        }


    }

    /**
     * Get one specific product
     * @param id ID of the product to look up
     * @return The product or HTTP 404 Not found if a product with provided ID is not found
     */
    @GetMapping(value = "{id}")
    public ResponseEntity<Optional<Product>> getProduct(@PathVariable("id") Long id) {
        Optional<Product> product = this.productRepository.findById(id);
        if (product.isPresent()) {
            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Delete a specific product
     * @param id ID of the product to delete
     * @return Always returns HTTP OK, even if the product is not found
     */
    @DeleteMapping(value = "{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable("id") Long id) {
        this.productRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
