import app from "./app";
import { envVars } from "./app/config/env";


const bootstrap = () =>{
     try{
         app.listen(envVars.PORT, () => {
  console.log(`Server is running on http://localhost:${envVars.PORT}`);
});
     }catch(err){
        console.log("Failed to start server", err)
     }
}


bootstrap();