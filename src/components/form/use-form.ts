import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

export function useForm(initialFieldValues) {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});
  const [currentField, setcurrentField] = useState("");
  // const validateOnChange=(name,value)=>{
  //   if(validateOnChangeFields.exists(name)){
  //     if(name===""){}
  //     else if(name===""){}
  //     else if(name===""){}
  //     else return
  //   }
  // }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    console.log("inputChange");
    setcurrentField(name);
  };

  const resetForm = () => {
    setValues(initialFieldValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
    currentField
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1)
    }
  }
}));

// export function Form(props) {
//   const { children, ...other } = props;
//   const classes = useStyles();
//   return (
//     <form className={classes.root} {...other}>
//       {props.children}
//     </form>
//   );
// }
