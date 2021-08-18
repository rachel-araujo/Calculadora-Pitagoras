import { useState } from "react";

const useForm = (initial) => {
  const [form, setForm] = useState(initial);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const cleanFields = () => {
    setForm(initial);
  };

  return { form, onChange, cleanFields };
};

export default useForm;