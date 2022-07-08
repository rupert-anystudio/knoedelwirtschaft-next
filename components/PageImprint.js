import Link from 'next/link'
import { useAppContext } from './AppContext'
import LayoutRestaurant from './LayoutRestaurant'
import Section from './Section'
import Text from './Text'

const PageImprint = () => {
  const {
    globals = {},
    restaurant = {},
    restaurantSlug,
  } = useAppContext()
  const {
    pageImprint,
    back,
  } = globals
  const {
    owner,
    name,
    city_area,
    phone,
    mail,
    street,
    street_nr,
    postal,
    city,
    st_id_nr,
    str_nr,
  } = restaurant
  return (
    <LayoutRestaurant
      footer={<Link href={`/${restaurantSlug}`} passHref><a>{back}</a></Link>}
    >
      <Section>
        <Text>
          <h1 id="impressum">{pageImprint}</h1>
          <p>{owner}<br/>
          {street} {street_nr}<br/>
          {postal} {city}<br/>
          Telefon: (030) {phone}<br/>
          E-Mail: {mail}<br/>
          St.-Id.-Nr.: {st_id_nr}<br/>
          Str. Nr.: {str_nr}</p>
          <p>Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV: {owner}</p>
          <p>Ich, {owner}, bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          <h2 id="datenschutzerklrung">Datenschutzerklärung</h2>
          <h3 id="1nameundkontaktdatendesverantwortlichen">1. Name und Kontaktdaten des Verantwortlichen</h3>
          <p>{owner}<br/>
          {street} {street_nr}<br/>
          {postal} {city}<br/>
          Telefon: (030) {phone}<br/>
          E-Mail: {mail}</p>
          <h3 id="2verarbeitungpersonenbezogenerdatenimrahmendesbetriebsdieserseite">2. Verarbeitung personenbezogener Daten im Rahmen des Betriebs dieser Seite</h3>
          <p>Personenbezogene Daten der Nutzer dieser Internetseite werden verarbeitet, soweit dies zum Zweck des Betriebs einer funktionsfähigen Internetseite erforderlich ist. Hierfür werden automatisiert folgende Daten von dem diese Seite aufrufenden Rechner erhoben:</p>
          <ul>
            <li>die IP-Adresse des Rechners, mit dem, mit dem diese Internetseite aufgerufen wird;</li>
            <li>der Typ der eingesetzten Browser-Software;</li>
            <li>die zuvor aufgerufene Internetseite;</li>
            <li>die Konfiguration des diese Seite aufrufenden Rechners;</li>
            <li>Datum und Uhrzeit.</li>
          </ul>
          <p>Die IP-Adresse wird nur solange gespeichert, wie dies zur Erbringung ordnungsgemäßer Dienste erforderlich ist, insbesondere zur Erkennung und Abwehr einer nicht ordnungsgemäßen Nutzung. Spätestens nach sieben Tagen wird die IP-Adresse des diese Seite aufrufenden Rechners anonymisiert.</p>
          <p>Rechtsgrundlage dieser Verarbeitung personenbezogener Daten ist Art. 6 Abs. 1 Satz 1 lit. f) der Verordnung (EU) 2016/679 (Datenschutzgrundverordnung – DSGVO). Das berechtigte Interesse an der Datenverarbeitung liegt im ordnungsgemäßen Betrieb dieser Internetseite.</p>
          <h3 id="3kategorienvonempfngernpersonenbezogenerdaten">3. Kategorien von Empfängern personenbezogener Daten</h3>
          <p>Die im Rahmen der unter 2. beschriebenen Vorgänge erhobenen Daten werden bei einem Auftragsdatenverarbeiter im Inland verarbeitet. Dieser erbringt Dienste zum technischen Betrieb und zur Wartung dieser Internetseite.</p>
          <h3 id="4rechtederbetroffenen">4. Rechte der Betroffenen</h3>
          <p>Personen, deren Daten im Rahmen der unter 2. beschriebenen Vorgänge erhoben werden, haben folgende Rechte:</p>
          <h4 id="aauskunftsrecht">a) Auskunftsrecht</h4>
          <p>Der Betroffene hat das Recht, von dem Verantwortlichen eine Bestätigung darüber zu verlangen, ob ihn betreffende personenbezogene Daten verarbeitet werden; ist dies der Fall, so hat er ein Recht auf Auskunft über diese personenbezogenen Daten und auf folgende Informationen:</p>
          <ul>
            <li>aa) die Verarbeitungszwecke;</li>
            <li>bb) die Kategorien personenbezogener Daten, die verarbeitet werden;</li>
            <li>cc) die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empfängern in Drittländern oder bei internationalen Organisationen;</li>
            <li>dd) falls möglich die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer;</li>
            <li>ee) das Bestehen eines Rechts auf Berichtigung oder Löschung der ihn betreffenden personenbezogenen Daten oder auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;</li>
            <li>ff) das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;</li>
            <li>gg) wenn die personenbezogenen Daten nicht bei dem Betroffenen erhoben werden, alle verfügbaren Informationen über die Herkunft der Daten;</li>
          </ul>
          <p>Der Verantwortliche stellt eine Kopie der personenbezogenen Daten, die Gegenstand der Verarbeitung sind, zur Verfügung.</p>
          <h4 id="brechtaufberichtigung">b) Recht auf Berichtigung</h4>
          <p>Der Betroffene hat das Recht, von dem Verantwortlichen unverzüglich die Berichtigung ihn betreffender unrichtiger personenbezogener Daten zu verlangen. Unter Berücksichtigung der Zwecke der Verarbeitung hat der Betroffene das Recht, die Vervollständigung unvollständiger personenbezogener Daten — auch mittels einer ergänzenden Erklärung — zu verlangen.</p>
          <h4 id="crechtauflschung">c) Recht auf Löschung</h4>
          <p>Der Betroffene hat das Recht, von dem Verantwortlichen zu verlangen, daß ihn betreffende personenbezogene Daten unverzüglich gelöscht werden, und der Verantwortliche ist verpflichtet, personenbezogene Daten unverzüglich zu löschen, sofern einer der folgenden Gründe zutrifft:</p>
          <ul>
            <li>aa) Die personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.</li>
            <li>bb) Der Betroffene widerruft seine Einwilligung, auf die sich die Verarbeitung gemäß Artikel 6 Absatz 1 Buchstabe a oder Artikel 9 Absatz 2 Buchstabe a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.</li>
            <li>cc) Der Betroffene legt gemäß Artikel 21 Absatz 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder der Betroffene legt gemäß Artikel 21 Absatz 2 DSGVO Widerspruch gegen die Verarbeitung ein.</li>
            <li>dd) Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
            <li>ee) Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.</li>
            <li>ff) Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Artikel 8 Absatz 1 DSGVO erhoben.</li>
          </ul>
          <p>Hat der Verantwortliche die personenbezogenen Daten öffentlich gemacht und ist er gemäß dem vorstehenden Absatz zu deren Löschung verpflichtet, so trifft er unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um für die Datenverarbeitung Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber zu informieren, daß ein Betroffener Person von ihnen die Löschung aller Links zu diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt hat.</p>
          <p>Die vorstehenden Absätze gelten nicht, soweit die Verarbeitung erforderlich ist</p>
          <ul>
            <li>aa) zur Ausübung des Rechts auf freie Meinungsäußerung und Information;</li>
            <li>bb) zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;</li>
            <li>cc) aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Artikel 9 Absatz 2 Buchstaben h und i sowie Artikel 9 Absatz 3 DSGVO;</li>
            <li>dd) zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</li>
          </ul>
          <h4 id="drechtaufeinschrnkungderverarbeitung">d) Recht auf Einschränkung der Verarbeitung</h4>
          <p>Der Betroffene hat das Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:</p>
          <ul>
            <li>aa) die Richtigkeit der personenbezogenen Daten von dem Betroffenen bestritten wird, und zwar für eine Dauer, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen,</li>
            <li>bb) die Verarbeitung unrechtmäßig ist und der Betroffene die Löschung der personenbezogenen Daten ablehnt und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangt;</li>
            <li>cc) der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, der Betroffene sie jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigt, oder</li>
            <li>dd) der Betroffene Widerspruch gegen die Verarbeitung gemäß Artikel 21 Absatz 1 DSGVO eingelegt hat, solange noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber denen des Betroffenen überwiegen.</li>
          </ul>
          <p>Wurde die Verarbeitung hiernach eingeschränkt, so dürfen diese personenbezogenen Daten — von ihrer Speicherung abgesehen — nur mit Einwilligung des Betroffenen oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet werden.
          Ein Betroffener, der eine Einschränkung der Verarbeitung hiernach erwirkt hat, wird von dem Verantwortlichen unterrichtet, bevor die Einschränkung aufgehoben wird.</p>
          <h4 id="ewiderspruchsrechtgegendieverarbeitung">e) Widerspruchsrecht gegen die Verarbeitung</h4>
          <p>Der Betroffene hat das Recht, aus Gründen, die sich aus seiner besonderen Situation ergeben, jederzeit gegen die Verarbeitung ihn betreffender personenbezogener Daten, die aufgrund von Artikel 6 Absatz 1 Buchstaben e oder f DSGVO erfolgt, Widerspruch einzulegen; Der Verantwortliche verarbeitet die personenbezogenen Daten nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die die Interessen, Rechte und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
          <h4 id="frechtaufdatenbertragbarkeit">f) Recht auf Datenübertragbarkeit</h4>
          <p>Der Betroffene hat das Recht, die ihn betreffenden personenbezogenen Daten, die er einem Verantwortlichen bereitgestellt hat, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und er hat das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern</p>
          <ul>
            <li>aa) die Verarbeitung auf einer Einwilligung gemäß Artikel 6 Absatz 1 Buchstabe a oder Artikel 9 Absatz 2 Buchstabe a DSGVO oder auf einem Vertrag gemäß Artikel 6 Absatz 1 Buchstabe b DSGVO beruht und</li>
            <li>bb) die Verarbeitung mit Hilfe automatisierter Verfahren erfolgt.</li>
          </ul>
          <p>Bei der Ausübung seines Rechts auf Datenübertragbarkeit hat der Betroffene das Recht, zu erwirken, daß die personenbezogenen Daten direkt von einem Verantwortlichen einem anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist.</p>
          <p>Die Ausübung des Rechts läßt Artikel 17 DSGVO unberührt. Dieses Recht gilt nicht für eine Verarbeitung, die für die Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde.</p>
          <h4 id="grechtaufeinschrnkungderverarbeitung">g) Recht auf Einschränkung der Verarbeitung</h4>
          <p>Der Betroffene hat das Recht zur Beschwerde bei einer zuständigen Aufsichtsbehörde.</p>
          <h3 id="5weitereangaben">5. Weitere Angaben</h3>
          <p>Die Bereitstellung der personenbezogenen Daten ist gesetzlich oder vertraglich nicht vorgeschrieben. Ein Vertragsschluß ist nicht erforderlich. Es besteht keine Pflicht, personenbezogene Daten bereitzustellen. Werden personenbezogene Daten nicht im unter 2. beschriebenen Rahmen zur Verfügung gestellt, ist eine Nutzung dieser Internetseite nicht möglich.
          Eine automatisierte Entscheidungsfindung und sogenanntes Profiling finden nicht statt.</p>
        </Text>
      </Section>
    </LayoutRestaurant>
  )
}

export default PageImprint