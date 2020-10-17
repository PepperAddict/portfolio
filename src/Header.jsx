import React, {useEffect, useState} from 'react';


export default function Header() {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    setLeaving(false)
  }, [])

  useEffect(() => {
    return () => {
      setLeaving(true)
    }
  })
    return (
        <header className={leaving ? 'exit' : 'enter'}>
          <h1>Hello. I am Jenearly.</h1>
          <h3>Full Stack Developer</h3>
      </header>
    )
}