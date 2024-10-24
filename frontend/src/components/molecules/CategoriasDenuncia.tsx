import './HacerDenuncia.css'; // Asegúrate de importar el archivo CSS

function HacerDenuncia() {
    const categorias = [
        { value: 'Robo', label: 'Robo' },
        { value: 'Violencia domestica', label: 'Violencia doméstica' },
        { value: 'Acoso sexual', label: 'Acoso sexual' },
        { value: 'Fraude o estafa', label: 'Fraude o estafa' },
        { value: 'Delitos ciberneticos', label: 'Delitos cibernéticos' },
        { value: 'Vandalismo', label: 'Vandalismo' },
        { value: 'Narcotrafico o consumo de drogas', label: 'Narcotráfico o consumo de drogas' },
        { value: 'Desaparicion de personas', label: 'Desaparición de personas' },
        { value: 'Abuso de autoridad', label: 'Abuso de autoridad' },
        { value: 'Corrupcion', label: 'Corrupción' },
        { value: 'Maltrato animal', label: 'Maltrato animal' },
        { value: 'Amenazas', label: 'Amenazas' },
        { value: 'Contaminacion ambiental', label: 'Contaminación ambiental' }
    ];

    return ( 
        <div className="container">
            <div className="header">
                <p>Realizar denuncia</p>
            </div>
            <div className="select-container">
                <select>
                    {categorias.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default HacerDenuncia;
