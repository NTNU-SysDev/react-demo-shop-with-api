package no.aronmn.shop.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "Name is mandatory")
    private String name;

    private String description;

    @Positive
    @NotNull(message = "Price is mandatory")
    private int price;

    private String image;

    public Product(
        @NotBlank(message = "Name is mandatory") String name, String description,
        @Positive @NotNull(message = "Price is mandatory") int price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    public Product(
        @NotBlank(message = "Name is mandatory") String name, String description,
        @Positive @NotNull(message = "Price is mandatory") int price, String image) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
}
