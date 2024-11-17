import React from "react";
import { useForm } from "../components/form/use-form";
import Input from "../components/controls/Input";
import RadioGroupGenerator from "../components/controls/RadioGroup";
import Select from "../components/controls/Select";
import * as customerService from "../services/customerService";
import CheckboxGenerator from "../components/controls/Checkbox";
import ButtonGenerator from "../components/controls/Button";
import { Form, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { FormControl, Typography } from "@mui/material";


type Customer = {
    id: number;
    fullName?: string;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    country?: string;
    location?: string;
    company: string;
    status: string;

}

const initialFieldValues: Customer = {
    id: 1,
    fullName: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    status: "active",
    company: "",
    location: "",

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

export default function CustomerForm() {
    const {
        values,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
        currentField
    } = useForm(initialFieldValues);
    const navigate = useNavigate();

    const validateOnSubmit = () => {
        let temp: TODO = {};
        temp.firstName = values.firstName ? "" : "Mandatory Field";
        temp.lastName = values.lastName ? "" : "Mandatory Field";
        temp.email = /$^|.+@.+..+/.test(values.email) ? "" : "Email is not Valid";
        temp.mobile = values.mobile.length > 9 ? "" : "Min 10 numbers required";
        temp.location = values.location ? "" : "Mandatory Field";
        temp.company = values.company ? "" : "Mandatory Field";
        setErrors(
            temp
        );
        return Object.values(temp).every((x) => x === "");
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        // const handleSubmit = () => {
        e.preventDefault();
        if (validateOnSubmit()) {
            window.alert("Submitting...");
            customerService.addCustomer(values);
            navigate('/customers', { replace: true })
        }


    };

    return (
        <Paper sx={{ px: 5, py: 5 }}>
            <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
                Customer Form
            </Typography>
            <Form onSubmit={handleSubmit}>
                <Grid container spacing={3} rowSpacing={2} columnSpacing={2}>
                    <Grid container spacing={4} size={{ xs: 12, md: 6 }}>
                        <FormControl>
                            <Input required
                                label="First Name"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleInputChange}
                                error={(errors as TODO).firstName}

                            /></FormControl>
                        <FormControl>
                            <Input required
                                variant="outlined"
                                label="Last Name"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleInputChange}
                                error={(errors as TODO).lastName}
                            /></FormControl>

                    </Grid>
                    <Grid container spacing={4} size={{ xs: 12, md: 6 }}>
                        <FormControl>
                            <Input
                                required
                                variant="outlined"
                                label="e-mail"
                                name="email"
                                value={values.email}
                                type="email"
                                onChange={handleInputChange}
                                error={(errors as TODO).email}
                            /></FormControl>
                        <FormControl><Input
                            variant="outlined"
                            label="mobile"
                            name="mobile"
                            value={values.mobile}
                            onChange={handleInputChange}
                            error={(errors as TODO).mobile}
                        /></FormControl>
                    </Grid>
                    <Grid container spacing={4} size={{ md: 6, xs: 12 }}>
                        <FormControl><Input required
                            variant="outlined"
                            label="Location"
                            name="location"
                            value={values.location}
                            onChange={handleInputChange}
                        /></FormControl>
                        <FormControl><Input
                            variant="outlined"
                            label="Company"
                            name="company"
                            value={values.company}
                            onChange={handleInputChange}
                        /></FormControl>
                    </Grid>
                    <Grid container spacing={4} size={{ xs: 12, md: 6 }}>
                        <FormControl>
                            <RadioGroupGenerator
                                name="gender"
                                label="Gender"
                                value={values.gender}
                                onChange={handleInputChange}
                                items={radioList}
                            /></FormControl>
                        <FormControl style={{ minWidth: '10em' }}>
                            <Select
                                name="departmentId"
                                label="Department"
                                value={values.departmentId}
                                onChange={handleInputChange}
                                options={customerService.departmentArray()}
                                error={(errors as TODO).departmentId}

                            /></FormControl>
                    </Grid>
                    <Grid container spacing={4} size={{ xs: 12, md: 6 }}>

                        <FormControl>
                            <CheckboxGenerator
                                name="isVerified"
                                label="Is Verified"
                                value={values.isVerified}
                                onChange={handleInputChange}
                                options={checkboxList}
                            /></FormControl>
                    </Grid>

                    <ButtonGenerator text="Submit" type="submit" />
                    <ButtonGenerator text="Reset" color="default" onClick={resetForm} />
                </Grid>
            </Form >
        </Paper >
    );
}
