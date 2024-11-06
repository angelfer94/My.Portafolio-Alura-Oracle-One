const generarIdAleatorio = () => {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
  
    for (let i = 0; i < 10; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      id += caracteres[indice];
    }
  
    return id;
  };
  

const listaUsuarios = () =>
    fetch('http://localhost:3000/users').then(respuesta => respuesta.json());

const crearUsuario = (name, email, password) => {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password,
            id: generarIdAleatorio()
        })
    })
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.body
            }
            throw new Error('No fue posible crear un usuario')
        });
};

const detalleUsuario = (id) => {
    return fetch(`http://localhost:3000/users/${id}`).then((resp) => resp.json());
};

const deleteUser = (id) => {
    return fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
    });
};

const updateUsuario = (name, email, password, id) => {
    return fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
        })
    })
        .then(response => response)
        .catch(error => console.error(error))
};

export const userServicios = {
    listaUsuarios,
    crearUsuario,
    deleteUser,
    detalleUsuario,
    updateUsuario,
}

