package utn.estudiantes.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.estudiantes.modelo.Estudiante;

public interface EstudianteRepositorio extends JpaRepository<Estudiante, Integer> {
    //Todas las funcionalidades del proyecto de estudianteDao con esta interfas estudianteRepositorio
    // con la extenció JpaRepository no debemos hacer mas nadaya que trae todas la funcionalidades
}

