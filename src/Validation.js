import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .max(50, "More than 50 characters? Online forms must be a chore for you.")
        .required("Not having a name must make life tough."),
    sauce: yup
        .boolean()
        .oneOf([true], "Read it or don't but we need you to at least pretend you read it.")
});