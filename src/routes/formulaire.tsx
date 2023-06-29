const Formulaire = () => {

  return (
    <div className='mt-8 w-3/4 mx-auto'>
        <h1 className="text-7xl underline decoration-4 underline-offset-8 my-4 text-center">Formulaire de téléconversation</h1>
        <form action="" className="grid gap-4 w-[40rem] mx-auto">
          <input type="text" name="conseiller" id="conseiller" className=" p-2 border rounded-lg" placeholder="Nom du conseiller"/>
          <input type="text" name="client" id="client" className=" p-2 border rounded-lg" placeholder="Nom du client"/>
          <textarea name="conversation" id="conversation" placeholder="Résumé de la conversation" className="w-full h-[32rem] p-2 border rounded-lg resize-none"></textarea>
        </form>
    </div>
  )
}

export default Formulaire