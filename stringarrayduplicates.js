function dup(s) {
  return s.map((string) =>
    string
      .split("")
      .filter((letter, i) => letter !== string[i + 1])
      .join("")
  );
}
dup(["abracadabra", "allottee", "assessee"]);
