import axios from "axios";
import { CLOUDINARY_UPLOAD } from "../Utils/setting";

export class ImageService  {
    uploadHinh = (frmDataImage) => {

        return axios.post( `${CLOUDINARY_UPLOAD}`,  frmDataImage);
    }

}
export const imageService = new ImageService();