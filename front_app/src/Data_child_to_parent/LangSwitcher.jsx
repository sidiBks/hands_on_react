export default function LangSwitcher({onLangChange}) {

    const handleLangCHange = (event) => {
        event.preventDefault()
        // console.log(event.currentTarget.dataset.lang)
        onLangChange(event.currentTarget.dataset.lang)
    }

    return <>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a onClick={handleLangCHange} href="#" data-lang='AR' className="nav-link active">العربية</a>
            </li>
            <li className="nav-item">
                <a onClick={handleLangCHange} href="#" data-lang='FR' className="nav-link active">Français</a>
            </li>
            <li className="nav-item">
                <a onClick={handleLangCHange} href="#" data-lang='EN' className="nav-link active">Anglais</a>
            </li>
            <li className="nav-item">
                <a onClick={handleLangCHange} href="#" data-lang='ES' className="nav-link active">Espagnol</a>
            </li>
        </ul>
    </>
}