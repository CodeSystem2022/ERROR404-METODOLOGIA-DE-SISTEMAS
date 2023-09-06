package utn.estudiantes.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
//constructores getter setter boilerplate= codigo repetitivo
@Data
@NoArgsConstructor //constructor vasio sin argumento
@AllArgsConstructor //constructor con todos los argumentos
//Metodo toString
@ToString
public class Estudiante {
    @Id //agrega el orden de la llave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) //para llaves autoincrementable
    private Integer idEStudiante;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;

}
