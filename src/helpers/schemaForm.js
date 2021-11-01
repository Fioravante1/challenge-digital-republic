import * as yup from 'yup';

const schemaForm = yup.object().shape({
  parede1_Altura: yup.number().max(15).required(),
  parede1_Largura: yup.number().max(15).required(),
  parede2_Altura: yup.number().max(15).required(),
  parede2_Largura: yup.number().max(15).required(),
  parede3_Altura: yup.number().max(15).required(),
  parede3_Largura: yup.number().max(15).required(),
  parede4_Altura: yup.number().max(15).required(),
  parede4_Largura: yup.number().max(15).required(),
});

export default schemaForm;
