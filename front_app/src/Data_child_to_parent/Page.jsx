import { useState } from "react";
import LangSwitcher from "./LangSwitcher";

export default function Page() {

    const [currentLang, setCurrentLang] = useState('AR')

    const displayMessage = () => {
        switch(currentLang){
            case 'AR': return 'السلام عليكم' 
            case 'FR': return 'Bonjour'
            case 'EN': return 'Hello'
            case 'ES': return 'Hola'
        }
    }

    return <>
        <LangSwitcher onLangChange={value => setCurrentLang(value)} />

        <hr />
        Current Language : {currentLang}
        <hr />

        <div>{displayMessage()}</div>
    </>
}