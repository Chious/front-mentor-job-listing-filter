import { Button, Card, Grid } from "@mui/material";
import LogoSvg from "../LogoSvg";

export default function CompanyInfo({ data }) {
  const news = data.new ? (
    <p
      style={{
        height: 30,
        width: 80,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#5CA5A5",
        color: "white",
        borderRadius: 90,
      }}
    >
      NEW!
    </p>
  ) : (
    <></>
  );
  const features = data.featured ? (
    <p
      style={{
        height: 30,
        width: 120,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "black",
        color: "white",
        borderRadius: 90,
      }}
    >
      FEATURED
    </p>
  ) : (
    <></>
  );

  const ability = [data.role, data.level, ...data.languages, ...data.tools];

  const skills = ability.map(function (item, i) {
    return (
      <Button
        style={{
          "&:hover": { color: "white", background: "#5CA5A5" },
          color: "#5CA5A5",
          background: "hsl(180, 31%, 95%)",
          borderRadius: 5,
          padding: 7,
          margin: 5,
          zIndex: 1,
          minWidth: 90,

          fontSize: "15px",
          fontWeight: 700,
          fontFamily: '"League Spartan", sans-serif',
        }}
        key={i}
      >
        {item}
      </Button>
    );
  });

  return (
    <>
      <Card
        style={{
          minHeight: 120,
          marginTop: 20,
          marginRight: 10,
          marginLeft: 10,
        }}
      >
        <Grid
          style={{ minHeight: 120, margin: 10 }}
          container
          spacing={1}
          direction="row"
        >
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img src={LogoSvg[data.id - 1]} alt="" style={{ maxWidth: 150 }} />
          </Grid>

          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {<p style={{ color: "#5CA5A5" }}>{data.company}</p>}
              {news}
              {features}
            </div>
            <h1>{data.position}</h1>
            <h1 style={{ color: "#7C8F8F" }}>
              {data.postedAt} <span>・</span>
              {data.contract} <span>・</span> {data.location}
            </h1>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingRight: 20,
            }}
          >
            {skills}
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
