import Section from '$components/layout/Section'

import styled from 'styled-components'

import Sprout from '$images/sprout.png'
import Support from '$images/support.png'
import Where from '$images/where.png'

const LandingPage = () => {
  return (
    <BodyWrapper>
      <ContentBox id="Section1">
        <Section
          id={'Section1'}
          slug={'section1'}
          logo={Sprout}
          rounded={'top'}
        >
          <p>
            Wandernde Bildungsbäume sind selbstgebaute mobilen Holzwägen, in
            denen diverse Bäume gepflanzt sind und dort ein halbes Jahr wachsen.
            Die hierfür benötigten Materialien sind Spenden der Firma Holz Hauff
            in Leingarten. Bei den Bäumen, die darin gepflanzt werden sind
            ebenso Spenden von mehreren Baumschulen der Region Heilbronn.
          </p>
          <br />
          <p>
            Zu Beginn des Projektes haben Schülerinnen und Schüler der folgenden
            Schulen beim Bauen der Holzwägen selbst mit angepackt:
          </p>
          <ul>
            <li>
              <b>Berufschule Heilbronn</b> - Schreiner Klasse
            </li>
            <li>
              <b>Holz Hauf</b>
            </li>
          </ul>
        </Section>
        <Section id={'Section2'} slug={'section2'} logo={Where} isWhite>
          <p>
            Wo sich die Bäume aktuell befinden findest du unter auf Instagram.
          </p>
          <p>
            Vielleicht sind sie ja aktuell ganz in deiner Nähe - über einen
            Besuch werden sie sich jederzeit freuen!
          </p>
        </Section>
        <Section
          id={'Section3'}
          slug={'section3'}
          logo={Support}
          rounded={'bottom'}
        >
          <p>
            Du willst den „Wandernde Bildungsbäume e.V." unterstützen? <br />
            Im Sinne der Bäume vielleicht etwas hinblättern? :)
          </p>
          <br />
          <p>
            Wir freuen uns über Deine Unterstützung und jede Spende. Auf dass
            wir mit Hilfe des Vereins allen Kindern, Jugendlichen oder jungen
            Erwachsenen auch in der Stadt Heilbronn das Zusammenleben mit den
            Bäumen und der Natur erklären und näherbringen können.
          </p>
          <h4>Unser Spendenkonto:</h4>
          <p>Wandernde Bildungsbäumen e.V.</p>
          <p>DE 46 6205 0000 0000 6165 11</p>
          <p>Kreissparkasse Heilbronn</p>
        </Section>
      </ContentBox>
    </BodyWrapper>
  )
}

export default LandingPage

const BodyWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
`

const ContentBox = styled.div`
  max-width: 800px;
  margin: 0 auto 2rem;
  padding: 0 0.5rem 0;
`
