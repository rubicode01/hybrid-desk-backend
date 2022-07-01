import multer from "multer";

// Storage Engine That Tells/Configures Multer for where (destination) and how (filename) to save/upload our files
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images"); //important this is a direct path from our current file to storage location
  },
  filename: (req, file, cb) => {
    const extension = file.mimetype.split("/");
    cb(null, `${file.fieldname}-${Date.now()}.${extension[1]}`);
  },
});

export const upload = multer({ storage: fileStorageEngine });
