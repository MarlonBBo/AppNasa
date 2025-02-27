

const params = new URLSearchParams({
    api_key:"WBHz6cyqrVeTT1u2ifvSIvYBGOuUJ3EjF9wsYRWU",
})

const api = async (url: string) => {
   const response = await fetch(`${url}?${params}`)
   if(!response.ok){
        throw new Error('falha ao pegar os dados');
   }
   return response
} 


export default api;