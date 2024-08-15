import {
  Especialidad,
  NumeroPacientesPorEspecialidad,
  Pacientes,
} from "./ejercicio.tools";

export const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  return pacientes.reduce((conteos, paciente) => {
    const especialidad = mapEspecialidadNamesToEspecialidadValues(
      paciente.especialidad
    );
    if (conteos[especialidad]) {
      conteos[especialidad]++;
    } else {
      conteos[especialidad] = 1;
    }
    return conteos;
  }, {} as NumeroPacientesPorEspecialidad);
};

const mapEspecialidadNamesToEspecialidadValues = (
  especialidad: Especialidad
): keyof NumeroPacientesPorEspecialidad => {
  if (especialidad === "Medico de familia") {
    return "medicoDeFamilia";
  }
  if (especialidad === "Pediatra") {
    return "pediatria";
  }
  return "cardiologia";
};