import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, res, callback) {
    callback(null, "temp/uploads/");
  },
  filename: function (req, file, callback) {
    callback(null, String(Date.now()) + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

export default upload;
