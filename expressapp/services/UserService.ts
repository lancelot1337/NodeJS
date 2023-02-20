import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import UserModel, { User } from "../models/User";

class UserService {
    private readonly __saltRound = 12;
    private readonly __jwtSecret = "topsecret123";

    users:Partial<User>[] = [];

    register(user:Partial<User>) {
        bcrypt.hash((user as User).password!, this.__saltRound).then(hash => {
            user.password = hash;
            UserModel.create(user, (err, resp) => {
                return resp;
            });
        })
    }

    async login(user:Partial<User>) {
        let u = await UserModel.findOne({email:user.email, password:user.password});
        if(u !== null) {
            return {
                token: jwt.sign({user:u.email}, this.__jwtSecret)
            }
        }
    }
    
    verifyToken(token:string) {
        return new Promise( (resolve, reject) => {
            jwt.verify(token, this.__jwtSecret, (err, decoded:any) =>{
                if(err) {
                    resolve(false);
                    return;
                }
                console.log(decoded);
                resolve(true);
            });
        }) as Promise<boolean>;
    }

}

export default new UserService();