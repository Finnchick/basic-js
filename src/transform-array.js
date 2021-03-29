module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  const controls = ["--double-next", "--double-prev", "--discard-next", "--discard-prev"];

  return arr.reduce((prev, cur, indx) => {
    if (controls.includes(cur)) {
      return prev;
    }

    if (arr[indx - 1] == `--discard-next`) {
      return prev;
    }

    if (arr[indx - 1] == `--double-next`) {
      prev.push(cur, cur);
    } else {
      prev.push(cur);
    }

    if (arr[indx + 1] == `--discard-prev`) {
      prev.splice(prev.length - 1, 1);
    }

    if (arr[indx + 1] == `--double-prev`) {
      prev.push(cur);
    }
    return prev;
  }, []);
};