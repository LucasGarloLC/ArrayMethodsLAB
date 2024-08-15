import { pacientes } from "./ejercicio.tools";
import {
  obtenPacientesAsignadosAPediatria,
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
} from "./ejercicio1";
import { activarProtocoloUrgencia } from "./ejercicio2";
import { reasignaPacientesAMedicoFamilia } from "./ejercicio3";
import { hayPacientesDePediatria } from "./ejercicio4";
import { cuentaPacientesPorEspecialidad } from "./ejercicioOpcional5";

// Apartado 1
console.log(obtenPacientesAsignadosAPediatria(pacientes));
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// Apartado 2
console.log(activarProtocoloUrgencia(pacientes));

// Apartado 3
console.log(reasignaPacientesAMedicoFamilia(pacientes));

// Apartado 4
console.log(hayPacientesDePediatria(pacientes));

// Apartado Opcional 5
console.log(cuentaPacientesPorEspecialidad(pacientes));