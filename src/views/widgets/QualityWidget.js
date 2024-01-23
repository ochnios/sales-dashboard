import { useSelector } from "react-redux";
import QualityCategory from "../../components/widget/QualityCategory";
import NoData from "../../components/widget/NoData";
import { useEffect, useState } from "react";
import QualityAspect from "../../components/widget/QualityAspect";
import { Link } from "react-router-dom";

export default function QualityWidget() {
  const [sum, setSum] = useState(0);
  const [worstAspects, setWorstAspects] = useState([]);
  let data = useSelector((state) => state.account.userData.quality);
  let strings = useSelector((state) => state.settings.strings);

  useEffect(() => {
    if (data === null) {
      return;
    }

    let totalRating = data.aspects.reduce((sum, aspect) => {
      return sum + aspect.rating;
    }, 0);

    let aspects = structuredClone(data.aspects);
    aspects.sort((a, b) => a.rating - b.rating);

    aspects = aspects.slice(0, 3);

    setWorstAspects(aspects);
    setSum(totalRating);
  }, [data]);

  return (
    <div className="widget text-center">
      <h3>
        <Link to="/quality">{strings.qualityHeader}</Link>
      </h3>
      {data !== null && (
        <div className="container">
          <div className="px-2 py-3">
            <QualityCategory rating={sum} />
            <div>
              <div>
                <h5 className="mt-3 mb-2">{strings.lowestAspects}</h5>
              </div>
              <div className="row">
                {worstAspects.map((x, idx) => (
                  <QualityAspect
                    key={idx}
                    title={strings.qualityAspects[x.name]}
                    rating={x.rating}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {data === null && <NoData />}
    </div>
  );
}
