package no.aronmn.shop.controller;

import java.util.List;
import java.util.Optional;

import no.aronmn.shop.entity.Product;
import no.aronmn.shop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Product management API. This class describes the different REST API endpoints.
 * @GetMapping means that the method responds to HTTP GET request,
 * @PostMapping responds to HTTP POST request
 * @DeleteMapping responds to HTTP DELETE request
 */
@CrossOrigin
@RestController
@RequestMapping(value = "/api/products")
public class ProductController {

    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    /**
     * Get a list of all products stored in the system
     *
     * @return List of all products
     */
    @GetMapping
    public List<Product> getAll() {
        return this.productRepository.findAll();
    }

    /**
     * Add a product to the database. The product details must be included in the request body, encoded in JSON format
     *
     * @param product The product to be stored, sent in JSON format in the request body
     * @return HTTP OK on success, a surprise on error :)
     */
    @PostMapping
    public ResponseEntity<Void> addProduct(@RequestBody Product product) {
        if (product != null) {
            product.setId(null); // Make sure we don't update an existing product
            this.productRepository.save(product);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.I_AM_A_TEAPOT);
        }


    }

    /**
     * Get one specific product
     *
     * @param id ID of the product to look up
     * @return The product or HTTP 404 Not found if a product with provided ID is not found
     */
    @GetMapping(value = "{id}")
    public ResponseEntity<Product> getProduct(@PathVariable("id") Long id) {
        Optional<Product> product = this.productRepository.findById(id);
        if (product.isPresent()) {
            return new ResponseEntity<>(product.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Delete a specific product
     *
     * @param id ID of the product to delete
     * @return Always returns HTTP OK, even if the product is not found
     */
    @DeleteMapping(value = "{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable("id") Long id) {
        this.productRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
