import test from 'node:test';
import Usuario from './usuarios/domain/usuario';
import UsuarioUseCases from './usuarios/application/usuarioUseCases';
import UsuarioRepositoryPostgress from './usuarios/infrastructure/db/usuarios.repository.postgress';
import assert from 'assert';


const usuarioUseCases: UsuarioUseCases = new UsuarioUseCases(new UsuarioRepositoryPostgress)

test('registro', async (t)=>{

    const usuario: Usuario = {
        nombre:"Prueba",
        password:"12345"
    }

    const usuarioRegistrado = await usuarioUseCases.registro(usuario);
    assert.strictEqual("Prueba", usuarioRegistrado.nombre)
})

test('login', async (t)=>{

    const usuario: Usuario = {
        nombre:"Prueba2",
        password:"12345"
    }

    const usuarioRegistrado = await usuarioUseCases.registro(usuario);

    const usuarioIntroducido = {
        nombre:"Prueba2",
        password:"12345"
    }

    const loginCorrecto = await usuarioUseCases.login(usuarioIntroducido);

    assert.strictEqual(usuarioRegistrado.id, loginCorrecto.id)

})


