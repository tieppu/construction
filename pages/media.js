import React from 'react'
import Head from 'next/head'

import Layout from '../src/Layout'
import Card from '../src/Card'
import Grid, {GridItem} from '../src/Grid'

const media = [
  {
    href: '/media/2017-04-24-start-crowdfunding',
    title: 'Ein bisschen Mitbesitzerin von «Republik» werden',
    date: 'Zürich, 24. April 2017',
    image: 'https://assets.project-r.construction/images/taufe_bern.jpg',
    imageAlt: 'Taufe des Namen und Logo in Bern'

  },
  {
    href: '/media/2017-04-12-republik',
    title: 'Das Magazin von Project R heisst «Republik»',
    date: 'Bern, 12. April 2017',
    image: 'https://assets.project-r.construction/images/logo_republik.jpg',
    imageAlt: 'Konzernmodell: Genossenschaft (Project R) und Aktiengesellschaft (Name noch ein Geheimnis)'

  },
  {
    href: '/media/2017-03-15-aufbau',
    title: 'Der Bauplan von Project R steht',
    date: 'Zürich, 15. März 2017',
    image: 'https://assets.project-r.construction/images/enterprise_with_hand.jpg',
    imageAlt: 'Konzernmodell: Genossenschaft (Project R) und Aktiengesellschaft (Name noch ein Geheimnis)'

  },
  {
    href: '/media/2017-01-10-hotel-rothaus',
    title: 'Project R stellt Aufbau-Crew vor und zieht ins Hotel Rothaus',
    date: 'Zürich, 10. Januar 2017',
    image: 'https://assets.project-r.construction/images/rothaus_thumb.jpg',
    imageAlt: 'Das Hotel Rothaus von aussen'
  }
]

export default ({url}) => {
  const meta = {
    title: 'Medien­informationen',
    description: '',
    image: 'https://assets.project-r.construction/images/header_projekte.jpg',
    url: `https://project-r.construction${url.pathname}`
  }

  return (
    <Layout meta={meta} url={url}>
      <Head>
        <title>Project R Medieninformationen</title>
      </Head>
      <h1>Medien&shy;informationen</h1>

      <Grid>
        {media.map((info, i) => (
          <GridItem key={i}>
            <Card {...info} />
          </GridItem>
        ))}
      </Grid>

      <h3>Medienartikel zu Project R</h3>

      <ul>

        <li><a href='https://derstandard.at/2000072162892/Schweizer-Journalisten-rufen-am-Montag-Republik-aus'>
            Schweizer Journalisten rufen die "Republik" aus</a>
          — Der Standard, Januar 2018</li>

        <li><a href='https://www.tagesanzeiger.ch/kultur/diverses/das-bietet-die-republik/story/25185549'> 
            Das bietet die «Republik»</a>
          — TagesAnzeiger, Januar 2018</li>

        <li><a href='https://www.srf.ch/play/tv/tagesschau/video/republik-ist-online?id=acafd8ea-28eb-48e5-9efc-40402426ef8b&station=69e8ac16-4327-4af4-b873-fd5cd6e895a7'>
            Republik ist online</a> 
          — SRF Tagesschau, Januar 2018</li> 

        <li><a href='https://www.nzz.ch/feuilleton/medien/das-online-magazin-republik-legt-los-ld.1347420'>
            Das Online-Magazin «Republik» legt los</a> 
          — NZZ, Januar 2018</li>

        <li><a href='http://www.persoenlich.com/medien/die-expedition-in-die-realitat-beginnt'>
            Republik: Die Expedition in die Realität beginnt</a> 
          — Persoenlich.com, Januar 2018</li>

        <li><a href='https://www.nau.ch/news/onlinemagazin-republik-geht-an-den-start-65285498'>
            «Das ist die Chance, den Journalismus von morgen zu erfinden»</a> 
          — Nau.ch, Januar 2018</li>

        <li><a href='https://www.cjr.org/innovations/news-startup-crowdfunding-switzerland.php'>
            Startup that promises ‘no-bullshit journalism’ nets serious cash</a> 
          — Columbia Journalism Review, Mai 2017</li>

        <li><a href='https://www.nzz.ch/feuilleton/medien/in-medias-ras-ein-testfall-fuer-schweizer-journalisten-ld.151509'>Die Idee von Project R liegt in der Luft</a> — NZZ, März 2017</li>
        <li><a href='http://www.srf.ch/sendungen/medientalk/medientalk-wie-gruende-ich-ein-medien-startup'>«Mit Fake News, mit Trump, mit dem langsamen Sterben, dem Niedergang und dem Vor-sich-her-Faulen der grossen Verlage, ist eigentlich klar, dass man etwas tun muss»</a> — Radio SRF4, Januar 2017</li>
        <li><a href='http://www.kontextwochenzeitung.de/medien/304/r-wie-rebellion-4158.html'>R wie Rebellion</a>  —  Kontext, Januar 2017</li>
        <li><a href='https://tsri.ch/zh/projectr/#.WICVuI0axL4.facebook'>«Wenn die Verleger aus der Publizistik ausgestiegen sind, ist es zu spät»</a> — tsüri.ch, Januar 2017</li>
        <li><a href='http://www.persoenlich.com/medien/von-den-konigen-zu-den-rebellen'>Verleger vs. Project R: Von den Königen zu den Rebellen</a> — persönlich.com, Januar 2017</li>
        <li><a href='https://www.nzz.ch/feuilleton/medien/journalismusprojekt-r-news-aus-dem-zuercher-rotlicht-viertel-ld.139282'>News aus dem Zürcher Rotlichtviertel</a> — NZZ, Januar 2017</li>
        <li><a href='http://www.deutschlandradiokultur.de/schweizer-online-magazin-project-r-die-verlage-verwandeln.1013.de.html?dram:article_id=376069'>«Die Verlage verwandeln sich in Internet-Handelshäuser»</a> — Deutschlandradio Kultur, Januar 2017</li>
        <li><a href='https://www.woz.ch/-730f'>Die grosse Wette auf den Journalismus</a> — WoZ, Oktober 2016</li>
        <li><a href='http://www.persoenlich.com/medien/wir-wollen-unser-baby-wach-intelligent-ohne-bullshit'>«Wir wollen unser Baby wach, intelligent, ohne Bullshit»</a> — persönlich.com, Oktober 2016</li>
        <li><a href='http://www.jungejournalisten.ch/blog/2016/10/27/und-ewig-sparen-die-verleger'>Und ewig sparen die Verleger</a> — jungejournalisten.ch, Oktober 2016</li>
        <li><a href='http://presseverein.ch/2016/10/09/die-rebellion-beginnt/'>Die Rebellion beginnt</a> — presseverein.ch, Oktober 2016</li>
      </ul>
    </Layout>
  )
}
