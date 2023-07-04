const Logout = () => {
  // Ketika logout di tekan maka akan menghapus token yang ada di localstorage
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  // Tunggu beberapa detik di page ini dulu sebelum di redirect
  setTimeout(() => {
    window.location.href = "/login";
  }, 2000);

  return (
    <h1 className="h-screen flex justify-center items-center text-2xl ">
      <span className="loading loading-spinner loading-lg"></span>
    </h1>
  )
}

export default Logout;