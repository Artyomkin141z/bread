import UIInput from "@/components/UI/ui_input"
import { useState } from "react"

export default function LogInPage(){
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div>
            <fotm>
                <UIInput 
                    type="text"
                    id="login"
                    name="login"
                    placeholder=" "
                    value={login}
                    onChange={(event) => {
                        setLogin(event.target.value)
                    }}
                    label="Логин"
                />
                <UIInput 
                    type="text"
                    id="password"
                    name="password"
                    placeholder=" "
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                    label="Пароль"
                />
                <button>Войти</button>
            </fotm>
        </div>
    )
}