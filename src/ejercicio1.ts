import { Pacientes } from "./ejercicio.tools";

export const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      return paciente;
    }
    return [];
  });
};
 
export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter((paciente) => {
    if (paciente.especialidad === "Pediatra" && paciente.edad < 10) {
      return paciente;
    }
    return [];
  });
};