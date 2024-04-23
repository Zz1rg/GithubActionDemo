const crypto = require('crypto');
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);