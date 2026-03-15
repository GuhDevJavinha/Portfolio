import './Work.css';

type WorkProps = {
  nameWork: string;
  roleWork: string;
  yearWork: string;
  descriptionWork: string;
  secondDescriptionWork?: string;
  achievements?: string[];
};

export default function Work({
  nameWork,
  roleWork,
  yearWork,
  descriptionWork,
  secondDescriptionWork,
  achievements = []
}: WorkProps) {
  return (
    <div className="work-container">
      <ul>
        <li>
          <div className='work-topline'>
            <strong>{nameWork}</strong>
            <span>{yearWork}</span>
          </div>
          <p className='work-role'><em>{roleWork}</em></p>
          <p>{descriptionWork}</p>
          <p>{secondDescriptionWork}</p>
          {achievements.length > 0 && (
            <ul className='work-achievements'>
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
