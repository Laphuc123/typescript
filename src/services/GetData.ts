import api from "./CreateApi";

type FormValues =
    {
        name: string,
        email: string,
        password: string,
        confirmPassword: string,
    }

export const getTask = async (path: string) => {
    const respone = await api.get(path);
    return respone.data;
};
export const pushData = async (path: string, data: FormValues) => {
    const { name, email, password } = data
    return await api.post((path), {
        name,
        email,
        password,
    })
}
