import { Testimonial } from "../models/Testimoniales.js";



const guardarTestimonial = async (req,res)=>{

    const { nombre,email,mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === '' || email.trim() === '' || mensaje.trim() === ''){
        errores.push({mensaje : 'Debes completar todos los campos'})

        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            email,
            mensaje, 
            testimoniales
        });
        return;
    } else {
        try {
            await Testimonial.create({
                nombre,
                email,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }


}

export {
    guardarTestimonial
}