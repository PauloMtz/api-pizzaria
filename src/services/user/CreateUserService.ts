interface UserRequest {
    name: string;
    email: string;
    password: string;
  }
  
class CreateUserService {
    async addUser({name, email, password}: UserRequest) {
        // o serviço recebe do controller e enviar para o banco de dados
        console.log(name);
        console.log(email);
        console.log(password);
  
        return { name: name, email: email, password: password }
    }
}
  
export { CreateUserService }