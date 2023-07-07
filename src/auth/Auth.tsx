const useAuth = () => {
  const user = localStorage.getItem('token');
  return user ? true : false;
};

export default useAuth;
