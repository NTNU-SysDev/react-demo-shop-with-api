package no.aronmn.shop.init;

import no.aronmn.shop.entity.Product;
import no.aronmn.shop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

/**
 * CommandLineRunner-classes are used to define tasks to be performed on startup
 */
@Configuration
public class Init implements CommandLineRunner {

    private final ProductRepository productRepository;

    @Autowired
    public Init(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    /**
     * This code will be initialized when the Spring Boot application is launched. It imports pre-defined data
     * @param args
     */
    @Override
    public void run(String... args) {
        // Cleanup database
        this.productRepository.deleteAll();

        // Add dummy data
        this.productRepository.save(new Product("Green t-shirt", "Some green t-shirt", 200));
        this.productRepository.save(new Product("Blue Jeans", "Random blue jeans", 250));
        this.productRepository.save(new Product("Shoes", "Shoe pair from Nike", 500));
    }
}
