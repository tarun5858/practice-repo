function TechStackList() {
  const skills = ['React', 'Node.js', 'Express', 'Supabase'];

  return (
    <div>
      <h3>My Skills:</h3>
      <ul>
        {skills.map((skill) =>{
            return <li> {skill}</li>
        })}
      </ul>
    </div>
  );
}
export default TechStackList;