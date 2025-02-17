// src/Stkittsnevis.tsx
import React, { useEffect as useEffect2, useState as useState2, useMemo } from "react";

// src/constants.ts
var constants = {
  WIDTH: 500,
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: 0.5,
  HOVERCOLOR: "#303030",
  SELECTED_COLOR: "#ff0000"
};
var stateCode = [
  "Christ Church Nichola Town",
  "Saint Anne Sandy Point",
  "Saint George Basseterre",
  "Saint George Gingerland",
  "Saint James Windward",
  "Saint John Capisterre",
  "Saint John Figtree",
  "Saint Mary Cayon",
  "Saint Paul Capisterre",
  "Saint Paul Charlestown",
  "Saint Peter Basseterre",
  "Saint Thomas Lowland",
  "Saint Thomas Middle Island",
  "Trinity Palmetto Point"
];
var drawPath = {
  "Christ Church Nichola Town": "M232.202,236.789L229.443,240.38L228.617,245.773L223.302,248.975L220.493,254.567L211.341,261.229L209.934,263.428L209.359,273.421L204.244,277.483L203.03,280.28L195.61,287.611L195.545,302.854L197.858,318.385L197.858,318.385L183.405,316.269L183.405,316.269L183.405,316.269L183.405,316.269L146.928,302.129L143.603,293.067L137.971,287.873L132.209,279.746L132.209,279.746L156.094,252.255L164.032,240.574L164.291,232.577L167.113,225.478L172.228,222.672L174.527,217.417L186.738,209.553L186.738,209.553L189.36,211.188L190.402,214.454L194.065,215.546L197.205,217.719L198.771,220.446L201.385,220.993L202.958,222.631L202.958,224.258L207.139,224.258L207.139,222.631L208.188,222.631L209.754,227.531L213.942,228.62L216.032,229.708L216.032,230.793L217.605,230.793L217.605,229.708L222.311,229.708L222.835,231.889L225.45,232.431L224.925,234.612L227.54,237.881L229.113,237.881L229.63,235.7z",
  "Saint Anne Sandy Point": "M102.061,246.899L98.713,251.081L81.079,264.542L74.146,263.255L70.928,264.542L65.677,271.813L54.78,283.216L44.329,290.902L42.094,294.563L41.11,298.887L41.11,298.887L39.76,297.252L38.187,297.252L30.867,292.895L30.867,280.916L24.588,270.563L21.45,268.929L20.925,265.114L17.786,263.483L17.262,260.761L15.696,259.123L13.081,257.492L10.466,258.034L4.712,252.588L2.098,252.042L0.524,249.869L0,246.596L2.098,237.335L1.049,234.066L2.098,223.169L0.524,222.077L0.524,216.088L1.049,214.454L2.622,214.454L2.622,212.819L4.188,212.277L4.188,209.415L4.188,209.415L25.113,219.59L26.384,218.89L26.607,213.979L28.108,210.47L34.768,211.487L36.039,213.979L34.394,221.149L34.394,223.955L35.292,224.576L42.332,224.737L43.754,226.3L46.972,225.593L52.884,228.638L58.652,234.092L63.213,234.402L80.209,240.174L101.472,244.928L101.472,244.928z",
  "Saint George Basseterre": "M392.312,559.677L391.787,558.59L389.173,558.59L383.943,552.057L384.984,547.707L387.082,546.07L386.558,542.262L384.468,540.633L384.468,537.908L382.895,537.908L383.419,535.188L384.984,535.188L383.419,533.554L383.943,531.921L382.895,532.463L382.895,531.375L377.665,530.833L375.05,527.021L375.05,522.121L386.033,513.962L387.082,507.971L389.697,506.338L389.697,504.158L388.648,503.616L387.082,498.716L385.509,498.174L384.468,495.999L384.468,492.183L390.221,484.562L389.173,484.562L388.648,481.84L387.082,480.752L386.558,475.852L384.468,473.131L385.509,468.227L383.943,464.417L380.279,461.154L380.279,459.517L376.092,454.623L376.092,452.99L373.477,451.356L372.436,449.177L366.682,446.455L359.879,440.467L353.601,438.833L350.461,436.111L345.231,437.749L341.051,436.111L341.051,434.478L338.953,432.84L334.772,431.21L333.2,425.768L331.634,424.68L318.036,424.137L316.463,422.5L312.807,422.5L311.758,423.588L306.003,423.046L299.726,418.69L295.544,411.609L293.447,411.609L291.357,413.789L291.357,415.965L289.791,415.965L290.308,412.155L293.447,410.518L293.447,409.434L289.267,407.254L289.791,403.986L291.881,402.898L291.881,401.265L288.742,399.631L271.48,398.542L270.956,401.811L272.005,403.986L267.817,405.078L261.539,403.986L258.399,400.177L253.17,400.722L250.031,402.898L250.031,406.712L248.989,408.342L247.416,408.342L247.416,409.434L244.277,411.609L242.711,411.071L241.138,406.162L235.908,406.162L233.294,408.888L230.679,408.888L229.63,407.254L225.974,407.254L225.974,405.62L227.016,405.078L225.974,402.898L222.131,402.356L222.131,402.356L221.894,391.472L216.039,378.244L215.81,374.583L209.502,363.108L210.278,360.259L213.338,359.208L215.213,356.445L215.493,353.405L211.42,350.215L207.304,341.499L206.586,337.165L206.586,337.165L216.011,341.316L217.914,350.575L222.899,355.106L231.728,354.048L233.509,357.948L235.83,360.162L242.05,357.122L261.905,359.107L263.27,367.936L282.837,369.573L282.995,374.075L289.748,380.237L293.526,389.536L300.724,385.61L303.504,385.457L309.114,390.982L312.39,391.865L314.523,393.824L319.041,401.369L332.094,403.437L335.714,398.838L341.051,397.69L341.051,397.69L340.002,398.542L340.002,400.722L341.051,401.265L340.526,413.789L341.568,415.965L343.142,417.603L346.28,418.145L346.805,419.782L347.847,419.782L348.896,416.511L351.51,417.057L353.601,418.69L353.601,421.412L354.649,424.68L356.215,425.222L356.215,427.943L359.354,429.034L359.879,431.21L365.108,432.84L365.633,435.02L369.296,435.565L371.387,438.833L374.001,438.291L375.574,439.925L378.714,439.925L381.328,444.821L383.943,444.821L384.468,446.455L388.124,446.455L389.697,449.177L389.697,451.898L392.312,452.99L391.787,458.979L395.975,461.154L395.975,462.242L397.541,462.242L399.632,459.517L401.204,459.517L406.958,466.055L408,469.325L409.573,470.409L412.188,470.409L412.188,469.325L413.236,469.325L415.852,476.397L417.941,478.031L417.417,483.474L418.466,485.652L424.744,486.736L425.786,484.02L426.835,484.02L428.4,476.943L429.974,474.219L431.016,474.219L437.818,481.298L449.851,483.474L451.416,485.107L449.326,487.828L449.326,489.462L452.465,490.553L453.507,494.907L455.604,496.541L455.604,498.716L457.17,499.262L458.743,503.616L458.743,505.25L455.08,507.971L454.031,510.691L451.94,512.325L445.138,514.504L443.572,517.225L443.572,521.033L444.621,522.667L446.187,522.667L446.711,521.579L449.851,525.388L449.851,529.742L447.235,531.375L447.235,532.463L445.662,533.554L439.384,532.463L437.294,525.934L435.728,527.021L435.203,524.846L433.63,524.846L432.589,526.476L428.4,527.566L427.359,531.375L424.744,530.287L422.646,532.463L422.122,538.995L419.508,541.716L417.417,540.079L416.368,537.362L413.754,536.274L412.188,531.375L406.958,531.375L406.434,533.554L404.344,534.096L403.295,537.362L399.632,537.362L400.68,540.633L400.68,555.323L397.541,558.044z",
  "Saint George Gingerland": "M611.476,697.896L610.434,698.435L610.958,703.877L607.295,705.51L609.385,709.316L608.861,714.213L610.958,721.826L606.771,720.739L606.246,725.091L603.632,726.178L601.541,728.904L601.541,737.059L597.878,741.956L597.354,746.304L596.312,746.853L596.312,750.117L597.354,751.753L595.263,753.378L594.738,757.732L591.6,759.365L590.033,763.171L587.943,764.258L586.37,769.154L584.804,770.241L579.05,770.241L579.574,769.154L578.525,768.067L575.387,766.977L573.82,767.522L573.296,765.345L565.969,765.89L560.215,768.067L558.125,771.328L554.461,770.786L552.896,772.96L545.051,772.419L540.568,774.051L540.568,774.051L530.483,679.386L528.903,674.638L528.903,674.638L528.903,674.638L528.903,674.638L528.903,674.638L528.903,674.638L538.744,674.264L564.727,677.716L567.743,678.684L573.806,683.466L589.337,685.03L596.979,692.192L604.005,692.383z",
  "Saint James Windward": "M471.293,589.606L472.341,586.344L474.956,585.802L477.047,582.536L477.047,580.357L474.432,579.271L473.907,576.554L478.619,576.004L482.275,571.646L484.897,571.646L486.464,573.829L489.603,574.375L497.972,574.375L504.774,572.741L506.864,570.563L515.233,567.847L516.282,567.847L516.799,570.021L518.372,571.108L528.831,570.563L532.495,568.385L536.158,568.385L538.248,568.93L538.772,570.563L541.912,572.741L545.051,572.741L547.142,576.554L549.756,577.637L552.371,583.623L557.076,586.344L558.649,591.785L562.83,590.697L563.879,592.33L574.862,591.785L582.706,593.959L583.755,598.866L582.189,601.04L586.37,605.394L587.943,605.394L592.124,611.38L593.697,611.38L594.214,613.013L597.878,615.732L598.927,619.54L602.59,624.984L601.017,628.792L601.017,630.97L603.632,634.231L602.59,638.043L602.59,647.832L604.156,655.453L606.771,659.264L607.819,663.071L606.246,674.492L607.295,683.204L609.91,688.098L612,689.73L611.476,697.896L611.476,697.896L604.005,692.383L596.979,692.192L589.337,685.03L573.806,683.466L567.743,678.684L564.727,677.716L538.744,674.264L528.903,674.638L528.903,674.638L528.91,674.357L528.91,674.357L525.254,666.09L497.023,618.871z",
  "Saint John Capisterre": "M186.738,209.553L174.527,217.417L172.228,222.672L167.113,225.478L164.291,232.577L164.032,240.574L156.094,252.255L132.209,279.746L132.209,279.746L102.061,246.899L102.061,246.899L101.472,244.928L101.472,244.928L101.472,243.215L97.5,237.211L89.569,236.276L83.126,228.945L77.365,225.283L75.418,222.163L79.01,215.928L80.885,204.23L86.049,194.018L87.824,186.588L91.473,185.324L92.507,182.982L98.024,179.08L101.393,174.991L108.878,171.19L112.462,167.602L112.462,167.602L115.077,171.96L115.602,175.776L119.265,177.958L122.929,176.857L129.724,171.96L132.339,171.96L134.437,173.045L135.478,176.319L137.576,177.958L140.19,175.776L141.756,176.319L140.708,177.958L141.232,179.042L148.035,180.135L154.313,183.947L156.403,183.947L156.928,182.316L158.494,182.316L164.771,188.848L166.345,188.848L166.862,191.025L168.959,193.752L170.001,193.752L172.099,198.11L175.755,202.472L177.328,203.015L177.328,204.099L178.894,204.099L179.418,205.738z",
  "Saint John Figtree": "M540.568,774.051L537.725,775.138L535.109,777.853L528.307,777.312L525.692,781.121L522.036,780.579L520.987,782.204L518.896,782.757L517.323,787.649L514.185,787.649L513.143,788.736L504.774,788.19L502.677,790.909L500.586,791.458L492.218,792L489.078,789.281L486.464,789.822L482.8,787.107L479.144,786.559L476.005,783.84L476.005,781.121L474.432,780.03L473.907,777.853L467.111,772.419L463.448,767.522L460.31,767.522L459.785,764.258L456.646,763.171L453.507,763.171L452.465,764.258L449.851,763.716L450.375,762.084L453.507,761.539L454.556,759.906L454.556,757.732L455.604,757.188L455.08,752.832L453.507,750.117L451.416,749.571L448.802,741.956L446.187,740.869L444.621,736.518L444.621,732.707L442.523,730.533L442.006,727.814L438.867,726.178L435.728,722.371L436.252,719.106L435.203,719.106L434.679,714.213L435.728,712.581L439.908,713.668L439.908,713.668L459.605,713.784L466.394,712.652L477.707,707.475L483.411,705.969L496.448,704.837L528.903,674.638L528.903,674.638L530.483,679.386z",
  "Saint Mary Cayon": "M292.923,308.583L270.482,317.219L257.372,314.478L251.432,315.285L244.464,314.264L235.427,314.747L222.727,311.085L215.192,314.795L206.988,322.271L206.988,322.271L206.255,321.123L197.858,318.385L197.858,318.385L195.545,302.854L195.61,287.611L203.03,280.28L204.244,277.483L209.359,273.421L209.934,263.428L211.341,261.229L220.493,254.567L223.302,248.975L228.617,245.773L229.443,240.38L232.202,236.789L232.202,236.789L234.867,235.7L234.867,238.423L235.908,239.516L235.384,244.416L238.006,247.139L243.235,246.596L245.326,249.869L246.892,249.869L248.465,255.857L252.128,258.584L254.219,258.584L254.219,260.215L259.973,264.572L260.497,268.929L261.021,270.018L262.587,270.018L262.587,268.929L263.636,269.472L265.202,276.005L267.817,276.005L268.866,274.921L268.866,281.455L270.956,285.273L272.005,285.273L272.529,287.992L275.144,289.081L277.234,292.895L280.898,295.618L281.939,298.337L288.742,304.874L290.833,305.42z",
  "Saint Paul Capisterre": "M101.472,244.928L80.209,240.174L63.213,234.402L58.652,234.092L52.884,228.638L46.972,225.593L43.754,226.3L42.332,224.737L35.292,224.576L34.394,223.955L34.394,221.149L36.039,213.979L34.768,211.487L28.108,210.47L26.607,213.979L26.384,218.89L25.113,219.59L4.188,209.415L4.188,209.415L4.188,207.373L5.754,206.83L5.754,205.738L8.893,206.284L9.417,205.195L8.376,203.015L9.417,198.11L11.508,195.937L17.262,195.937L19.359,192.117L22.498,191.025L22.498,188.305L26.679,183.947L27.728,179.042L29.818,177.404L32.957,178.496L33.481,177.404L36.096,176.857L37.662,175.23L38.711,169.241L40.801,169.241L41.326,170.868L43.416,170.868L45.514,168.691L47.604,168.145L49.694,165.421L52.309,164.875L53.882,165.967L55.973,164.875L59.636,168.145L64.341,168.145L67.48,165.421L74.8,164.332L77.422,158.339L88.93,155.615L92.062,156.157L92.586,158.339L96.25,158.339L96.774,157.25L100.431,157.25L102.528,156.157L106.708,159.427L109.323,165.967L112.462,167.602L112.462,167.602L108.878,171.19L101.393,174.991L98.024,179.08L92.507,182.982L91.473,185.324L87.824,186.588L86.049,194.018L80.885,204.23L79.01,215.928L75.418,222.163L77.365,225.283L83.126,228.945L89.569,236.276L97.5,237.211L101.472,243.215z",
  "Saint Paul Charlestown": "M439.908,713.668L441.481,709.316L439.908,704.423L441.481,692.711L441.481,692.711L467.931,693.634L481.694,696.365L484.589,694.104L494.186,693.257L499.796,689.021L528.91,674.357L528.91,674.357L528.903,674.638L528.903,674.638L528.903,674.638L528.903,674.638L496.448,704.837L483.411,705.969L477.707,707.475L466.394,712.652L459.605,713.784z",
  "Saint Peter Basseterre": "M292.923,308.583L296.062,314.679L298.677,315.771L299.726,317.402L303.913,318.494L303.389,323.938L306.003,328.841L306.528,332.655L310.185,338.1L309.667,340.276L311.233,345.179L313.323,346.267L313.848,347.897L315.421,347.897L315.938,349.535L318.561,350.623L324.314,357.163L324.831,359.339L327.446,360.966L325.88,365.875L324.831,366.417L324.831,376.218L330.067,381.662L334.772,382.208L335.297,383.845L337.912,382.208L340.002,382.753L337.388,390.919L340.526,392.553L341.051,397.69L341.051,397.69L335.714,398.838L332.094,403.437L319.041,401.369L314.523,393.824L312.39,391.865L309.114,390.982L303.504,385.457L300.724,385.61L293.526,389.536L289.748,380.237L282.995,374.075L282.837,369.573L263.27,367.936L261.905,359.107L242.05,357.122L235.83,360.162L233.509,357.948L231.728,354.048L222.899,355.106L217.914,350.575L216.011,341.316L206.586,337.165L206.586,337.165L206.988,322.271L206.988,322.271L215.192,314.795L222.727,311.085L235.427,314.747L244.464,314.264L251.432,315.285L257.372,314.478L270.482,317.219z",
  "Saint Thomas Lowland": "M528.91,674.357L499.796,689.021L494.186,693.257L484.589,694.104L481.694,696.365L467.931,693.634L441.481,692.711L441.481,692.711L444.621,687.556L445.138,684.833L444.097,682.113L444.097,675.59L443.048,675.045L442.523,671.238L443.048,667.424L442.006,666.336L442.006,658.719L444.621,639.13L447.235,636.952L448.802,629.879L452.465,622.261L455.604,620.086L456.129,617.365L461.358,612.467L460.834,608.655L463.973,604.848L463.973,602.67L461.883,602.128L462.399,599.949L465.539,595.055L469.202,593.959L469.202,592.876L470.769,592.33L471.293,589.606L471.293,589.606L497.023,618.871L525.254,666.09z",
  "Saint Thomas Middle Island": "M183.405,316.269L166.675,334.342L156.59,337.842L149.471,342.396L141.656,357.537L131.822,366.26L131.822,366.26L131.822,360.427L129.724,358.79L129.724,356.61L127.634,353.891L125.543,353.891L122.929,350.077L116.65,348.447L116.65,347.355L114.56,346.813L113.511,345.179L110.372,344.633L106.708,341.911L101.479,340.822L100.955,339.73L98.864,339.73L94.159,335.92L90.496,335.374L89.447,333.74L81.603,331.563L77.422,328.841L72.71,328.295L71.668,326.661L64.866,322.851L64.866,321.762L63.817,321.762L63.292,320.128L55.448,312.503L50.743,310.323L46.555,304.874L46.031,301.063L43.94,301.063L41.11,298.887L41.11,298.887L42.094,294.563L44.329,290.902L54.78,283.216L65.677,271.813L70.928,264.542L74.146,263.255L81.079,264.542L98.713,251.081L102.061,246.899L102.061,246.899L132.209,279.746L132.209,279.746L137.971,287.873L143.603,293.067L146.928,302.129z",
  "Trinity Palmetto Point": "M183.405,316.269L197.858,318.385L197.858,318.385L206.255,321.123L206.988,322.271L206.988,322.271L206.586,337.165L206.586,337.165L207.304,341.499L211.42,350.215L215.493,353.405L215.213,356.445L213.338,359.208L210.278,360.259L209.502,363.108L215.81,374.583L216.039,378.244L221.894,391.472L222.131,402.356L222.131,402.356L216.557,402.898L215.508,401.811L210.278,402.356L208.712,401.265L207.664,402.356L201.91,401.811L196.156,402.898L194.065,400.177L190.402,398.542L186.738,400.177L181.509,400.177L178.37,396.909L176.279,396.909L174.189,395.275L171.05,395.275L168.435,396.909L168.435,395.821L166.345,394.732L167.386,392.553L166.862,389.831L162.681,389.285L161.108,386.563L152.74,384.929L151.174,382.753L148.035,381.116L144.896,383.292L141.756,382.753L138.093,375.672L138.617,373.496L136.527,370.773L133.388,369.682L133.388,368.594L131.297,367.505L131.822,366.26L131.822,366.26L141.656,357.537L149.471,342.396L156.59,337.842L166.675,334.342z"
};

// src/hooks/mouseTrack.ts
import { useState, useEffect } from "react";
var useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const updateMousePosition = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return position;
};
var mouseTrack_default = useMousePosition;

// src/Stkittsnevis.tsx
import { useId } from "react";
var hintStyleBase = {
  position: "fixed",
  backgroundColor: "white",
  padding: "10px",
  borderRadius: 5,
  border: "1px solid #ccc",
  pointerEvents: "none",
  zIndex: 1e3
};
var getStrokeProperties = (borderStyle) => {
  switch (borderStyle) {
    case "dashed":
      return { strokeDasharray: "8 4" };
    case "dotted":
      return { strokeDasharray: "2 2" };
    case "dash-dot":
      return { strokeDasharray: "8 4 2 4" };
    case "dash-double-dot":
      return { strokeDasharray: "8 4 2 4 2 4" };
    default:
      return { strokeDasharray: "none" };
  }
};
var Stkittsnevis = ({
  type,
  size = constants.WIDTH,
  mapColor = constants.MAPCOLOR,
  strokeColor = constants.STROKE_COLOR,
  strokeWidth = constants.STROKE_WIDTH,
  hoverColor,
  selectColor,
  hints,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  onSelect,
  cityColors = {},
  disableClick = false,
  disableHover = false,
  borderStyle
}) => {
  if (type === "select-single") {
    return /* @__PURE__ */ React.createElement(
      StkittsnevisSingle,
      {
        type: "select-single",
        size,
        mapColor,
        strokeColor,
        strokeWidth,
        hoverColor,
        selectColor,
        hints,
        hintTextColor,
        hintBackgroundColor,
        hintPadding,
        hintBorderRadius,
        onSelect,
        cityColors,
        disableClick,
        disableHover,
        borderStyle
      }
    );
  } else if (type === "select-multiple") {
    return /* @__PURE__ */ React.createElement(
      StkittsnevisMultiple,
      {
        type: "select-multiple",
        size,
        mapColor,
        strokeColor,
        strokeWidth,
        hoverColor,
        selectColor,
        hints,
        hintTextColor,
        hintBackgroundColor,
        hintPadding,
        hintBorderRadius,
        onSelect,
        cityColors,
        disableClick,
        disableHover,
        borderStyle
      }
    );
  } else {
    return null;
  }
};
var StkittsnevisSingle = ({
  size,
  mapColor,
  strokeColor,
  selectColor,
  strokeWidth,
  hoverColor,
  hints,
  onSelect,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  cityColors,
  disableClick,
  disableHover,
  borderStyle
}) => {
  const instanceId = useId().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [stateHovered, setStateHovered] = useState2(null);
  const [selectedState, setSelectedState] = useState2(null);
  const [viewBox, setViewBox] = useState2("0 0 100 100");
  const strokeProps = useMemo(() => getStrokeProperties(borderStyle), [borderStyle]);
  useEffect2(() => {
    const svg = document.getElementById(`svg2-${instanceId}`);
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, [instanceId]);
  const mapStyle = useMemo(
    () => ({
      width: size,
      stroke: strokeColor,
      strokeWidth,
      ...strokeProps
    }),
    [size, strokeColor, strokeWidth, strokeProps]
  );
  const hintStyle = {
    ...hintStyleBase,
    backgroundColor: hintBackgroundColor || hintStyleBase.backgroundColor,
    padding: hintPadding || hintStyleBase.padding,
    borderRadius: hintBorderRadius || hintStyleBase.borderRadius,
    color: hintTextColor || "black",
    top: y + 20,
    left: x + 20
  };
  useEffect2(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  useEffect2(() => {
    if (selectedState) {
      const path = document.getElementById(`${selectedState}-${instanceId}`);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    }
  }, [selectedState, selectColor, instanceId]);
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(hoverStateId);
    if (path && !disableHover) {
      path.style.fill = selectedState === hoverStateId ? selectColor || constants.SELECTED_COLOR : hoverColor || constants.HOVERCOLOR;
    }
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(null);
    if (path && !disableHover) {
      path.style.fill = selectedState === hoverStateId ? selectColor || constants.SELECTED_COLOR : cityColors[hoverStateId] || mapColor;
    }
  };
  const handleClick = (stateCode2) => {
    if (disableClick) return;
    if (selectedState === stateCode2) {
      const path = document.getElementById(`${stateCode2}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[stateCode2] || mapColor;
      }
      setSelectedState(null);
      if (onSelect) {
        onSelect(null);
      }
    } else {
      if (selectedState) {
        const previousPath = document.getElementById(`${selectedState}-${instanceId}`);
        if (previousPath) {
          previousPath.style.fill = cityColors[selectedState] || mapColor;
        }
      }
      setSelectedState(stateCode2);
      if (onSelect) {
        onSelect(stateCode2);
      }
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((code, index) => /* @__PURE__ */ React.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(code),
      onMouseEnter: () => handleMouseEnter(code),
      onMouseLeave: () => handleMouseLeave(code),
      id: `${code}-${instanceId}`,
      d: drawPath[code],
      style: {
        fill: cityColors[code] || mapColor,
        cursor: disableClick ? "default" : "pointer",
        ...strokeProps
      }
    }
  )))), hints && stateHovered && /* @__PURE__ */ React.createElement("div", { style: hintStyle }, stateHovered));
};
var StkittsnevisMultiple = ({
  size,
  mapColor,
  strokeColor,
  selectColor,
  strokeWidth,
  hoverColor,
  hints,
  hintTextColor,
  hintBackgroundColor,
  hintPadding,
  hintBorderRadius,
  onSelect,
  cityColors,
  disableClick,
  disableHover,
  borderStyle
}) => {
  const instanceId = useId().replace(/:/g, "");
  const { x, y } = mouseTrack_default();
  const [selectedStates, setSelectedStates] = useState2([]);
  const [stateHovered, setStateHovered] = useState2(null);
  const [viewBox, setViewBox] = useState2("0 0 100 100");
  const strokeProps = useMemo(() => getStrokeProperties(borderStyle), [borderStyle]);
  useEffect2(() => {
    const svg = document.getElementById(`svg2-${instanceId}`);
    if (svg) {
      const bbox = svg.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, [instanceId]);
  const mapStyle = useMemo(
    () => ({
      width: size,
      stroke: strokeColor,
      strokeWidth,
      ...strokeProps
    }),
    [size, strokeColor, strokeWidth, strokeProps]
  );
  const hintStyle = {
    ...hintStyleBase,
    backgroundColor: hintBackgroundColor || hintStyleBase.backgroundColor,
    padding: hintPadding || hintStyleBase.padding,
    borderRadius: hintBorderRadius || hintStyleBase.borderRadius,
    color: hintTextColor || "black",
    top: y + 20,
    left: x + 20
  };
  useEffect2(() => {
    stateCode.forEach((state) => {
      const path = document.getElementById(`${state}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[state] || mapColor;
      }
    });
  }, [cityColors, mapColor, instanceId]);
  useEffect2(() => {
    selectedStates.forEach((selectedState) => {
      const path = document.getElementById(`${selectedState}-${instanceId}`);
      if (path) {
        path.style.fill = selectColor || constants.SELECTED_COLOR;
      }
    });
  }, [selectedStates, selectColor, instanceId]);
  const handleMouseEnter = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(hoverStateId);
    if (path && !disableHover) {
      path.style.fill = selectedStates.includes(hoverStateId) ? selectColor || constants.SELECTED_COLOR : hoverColor || constants.HOVERCOLOR;
    }
  };
  const handleMouseLeave = (hoverStateId) => {
    const path = document.getElementById(`${hoverStateId}-${instanceId}`);
    setStateHovered(null);
    if (path && !disableHover) {
      path.style.fill = selectedStates.includes(hoverStateId) ? selectColor || constants.SELECTED_COLOR : cityColors[hoverStateId] || mapColor;
    }
  };
  const handleClick = (stateCode2) => {
    if (disableClick) return;
    if (selectedStates.includes(stateCode2)) {
      const updatedSelectedStates = selectedStates.filter((state) => state !== stateCode2);
      const path = document.getElementById(`${stateCode2}-${instanceId}`);
      if (path) {
        path.style.fill = cityColors[stateCode2] || mapColor;
      }
      setSelectedStates(updatedSelectedStates);
      if (onSelect) {
        onSelect(stateCode2, updatedSelectedStates);
      }
    } else {
      setSelectedStates((prevStates) => {
        const updatedStates = [...prevStates, stateCode2];
        const path = document.getElementById(`${stateCode2}-${instanceId}`);
        if (path) {
          path.style.fill = selectColor || constants.SELECTED_COLOR;
        }
        if (onSelect) {
          onSelect(stateCode2, updatedStates);
        }
        return updatedStates;
      });
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "map", style: mapStyle }, /* @__PURE__ */ React.createElement("svg", { version: "1.1", id: `svg2-${instanceId}`, x: "0px", y: "0px", viewBox }, stateCode?.map((code, index) => /* @__PURE__ */ React.createElement(
    "path",
    {
      key: index,
      onClick: () => handleClick(code),
      onMouseEnter: () => handleMouseEnter(code),
      onMouseLeave: () => handleMouseLeave(code),
      id: `${code}-${instanceId}`,
      d: drawPath[code],
      style: {
        fill: cityColors[code] || mapColor,
        cursor: disableClick ? "default" : "pointer",
        ...strokeProps
      }
    }
  )))), hints && stateHovered && /* @__PURE__ */ React.createElement("div", { style: hintStyle }, stateHovered));
};
var Stkittsnevis_default = Stkittsnevis;

// src/index.ts
var src_default = Stkittsnevis_default;
export {
  src_default as default
};
