function generatePassword() {
    const length = document.getElementById("length").value;
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%&*"
    let password = "";
    let repeated = "";
    let charToAdd = "";
    for (let i = 0; i < length; i++) {
        charToAdd = chars.charAt(Math.floor(Math.random() * chars.length));
        if(i >= 0){
            repeated = password.slice(-1);
            if(repeated === charToAdd){
                charToAdd = chars.charAt(Math.floor(Math.random() * chars.length));
            }
        } 
        password += charToAdd;
    }

    document.getElementById("result").textContent = "Password generated: " + password;
}