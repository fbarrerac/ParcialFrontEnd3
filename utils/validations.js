export const validateName = name => {
    if (name == '') {
        return false;
    } else if (name[0] === " ") {
        return false;
    } else if (name.trim().length < 3) {
        return false;
    } else {
        return true
    }
};

export const validateColor = color => {
    if (color.length < 6) {
        return false
    } else {
        return true
    }
}
