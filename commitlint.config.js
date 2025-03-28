/* eslint-disable no-undef */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nueva funcionalidad
        'fix', // Arreglos de bugs
        'docs', // Cambios en documentación
        'style', // Formato, sin afectar código (espacios, comas)
        'refactor', // Refactorización sin cambiar funcionalidad
        'perf', // Mejoras de rendimiento
        'test', // Agregar o corregir pruebas
        'chore', // Cambios en la configuración (builds, CI/CD)
      ],
    ],
    'subject-case': [2, 'always', 'sentence-case'],
  },
};
