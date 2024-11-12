import {
    Grid,
    Paper
} from "@mui/material";
import React from "react";
import { useForm } from "../components/form/use-form";
import Input from "../components/controls/Input";
import RadioGroupGenerator from "../components/controls/RadioGroup";
import Select from "../components/controls/Select";
import * as employeeServices from "../services/userServices";
import CheckboxGenerator from "../components/controls/Checkbox";
import ButtonGenerator from "../components/controls/Button";
import { Form } from "react-router-dom";

const initialFieldValues = {
    id: 1,
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    gender: "male",
    departmentId: "",
    hireDate: new Date(),
    isPermanent: false
};

const radioList = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" }
];

const checkboxList = [
    { id: "1", title: "yes" },
    { id: "2", title: "no" }
];

export default function UserForm() {
    const {
        values,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
        currentField
    } = useForm(initialFieldValues);

    const validateOnSubmit = () => {
        let temp: TODO = {};
        temp.fullName = values.fullName ? "" : "Mandatory Field";
        temp.email = /$^|.+@.+..+/.test(values.email) ? "" : "Email is not Valid";
        temp.mobile = values.mobile.length > 9 ? "" : "Min 10 numbers required";
        temp.departmentId =
            values.departmentId.length !== 0 ? "" : "Mandatory Field";
        setErrors({
            ...temp
        });
        return Object.values(temp).every((x) => x === "");
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (validateOnSubmit()) {
            window.alert("Submitting...");
        }
        employeeServices.insertEmployee(values);
        resetForm();
    };

    return (
        <Paper>
            <Form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item columns={2} columnSpacing={3} xs={12} md={6}>
                        <Input
                            label="Full Name"
                            name="fullName"
                            value={values.fullName}
                            onChange={handleInputChange}
                            error={(errors as TODO).fullName}
                        />
                        <Input
                            variant="outlined"
                            label="e-mail"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                            error={(errors as TODO).email}
                        />
                        <Input
                            variant="outlined"
                            label="mobile"
                            name="mobile"
                            value={values.mobile}
                            onChange={handleInputChange}
                            error={(errors as TODO).mobile}
                        />
                        <Input
                            variant="outlined"
                            label="city"
                            name="city"
                            value={values.city}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <RadioGroupGenerator
                            name="gender"
                            label="Gender"
                            value={values.gender}
                            onChange={handleInputChange}
                            items={radioList}
                        />
                        <Select
                            name="departmentId"
                            label="Department"
                            value={values.departmentId}
                            onChange={handleInputChange}
                            options={employeeServices.departmentArray()}
                            error={(errors as TODO).departmentId}
                        />
                        {/* <DatePickerGenerator
              name="hireDate"
              label="Date"
              value={values.hireDate}
              onChange={handleInputChange}
            /> */}
                        <CheckboxGenerator
                            name="isPermanent"
                            label="Permanent Employee"
                            value={values.isPermanent}
                            onChange={handleInputChange}
                            options={checkboxList}
                        />
                        <div>
                            <ButtonGenerator text="Submit" type="submit" />
                            <ButtonGenerator text="Reset" color="default" onClick={resetForm} />
                        </div>
                    </Grid>
                </Grid>
            </Form>
        </Paper>
    );
}
