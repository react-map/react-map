// src/Stpierre.tsx
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
var stateCode = ["Miquelon-Langlade", "Saint-Pierre"];
var drawPath = {
  "Miquelon-Langlade": "M34.233,634.737L33.471,635.293L30.812,635.293L30.049,634.182L28.529,634.182L27.004,635.849L25.484,635.849L24.346,634.182L22.063,634.182L17.117,637.508L15.597,637.508L13.314,638.618L12.933,638.063L11.794,638.618L9.459,638.421L8.002,640.361L6.983,647.286L5.709,648.587L4.518,648.138L2.502,645.863L2.502,644.836L3.62,644.379L5.411,641.989L4.565,639.722L4.946,638.618L6.466,636.952L7.229,634.737L8.749,634.182L8.749,633.626L5.328,628.642L4.184,629.197L3.426,628.642L1.901,625.315L2.283,624.76L1.901,623.101L0,620.33L0.423,618.861L1.995,617.948L1.546,616.472L3.223,615.558L4.456,613.967L4.121,612.833L6.696,612.49L7.704,611.691L8.378,610.443L7.992,609.24L8.368,608.692L9.512,608.692L11.032,606.47L12.661,602.222L14.009,602.222L15.91,600.859L22.632,592.774L23.531,592.432L23.865,589.363L24.873,589.249L25.103,587.628L27.025,587.78L28.702,585.96L28.817,584.483L29.6,583.341L30.833,583.112L31.841,581.521L30.049,579.861L30.431,578.201L31.951,576.534L33.042,576.474L36.74,573.519L43.238,572.377L58.866,564.739L63.139,563.779L63.52,563.231L67.704,563.779L69.605,559.347L71.506,557.131L73.789,555.463L76.072,554.907L78.735,552.691L81.018,549.362L81.394,546.59L84.701,540.992L86.158,539.964L87.056,538.144L87.103,523.297L87.86,519.411L86.722,513.865L88.242,508.867L93.188,500.546L95.471,500.546L95.847,501.103L97.753,500.546L98.892,501.103L100.793,499.99L103.076,495.556L103.838,492.781L103.838,490.557L105.74,483.347L106.121,476.687L107.26,471.138L106.497,468.92L107.26,465.589L106.878,463.363L107.26,447.965L106.497,432.281L102.695,403.96L101.175,400.627L101.556,398.407L100.412,392.847L99.273,390.627L98.892,386.188L98.129,385.075L98.511,383.412L97.753,381.184L97.753,378.964L95.847,373.968L95.847,371.19L94.708,368.406L95.089,366.743L92.807,363.409L92.426,357.854L90.906,354.52L88.623,346.188L87.479,343.41L85.202,340.632L85.959,338.96L85.202,335.625L82.538,331.184L81.018,327.292L80.057,322.178L73.277,305.019L71.909,299.919L68.404,291.964L66.941,290.605L67.693,289.482L66.137,287.528L65.792,284.924L64.57,282.52L63.562,282.145L61.295,277.487L58.574,275.915L57.236,275.922L52.87,271.142L50.969,271.142L48.994,272.135L47.772,274.93L45.531,274.8L44.346,273.372L44.727,272.585L46.126,272.471L47.083,271.149L46.477,268.912L44.194,268.362L40.392,264.353L39.18,264.132L37.654,265.025L36.74,260.023L34.933,256.502L33.638,255.731L32.823,255.914L31.188,253.906L31.569,251.125L30.812,250.568L30.431,247.788L32.133,245.122L30.802,243.449L30.812,241.67L28.681,238.889L28.911,235.902L28.064,232.313L27.004,230.548L27.95,227.209L27.004,226.201L27.386,220.532L28.148,219.975L28.529,213.297L29.287,212.747L27.767,207.177L27.767,202.73L27.004,202.172L24.346,194.385L24.346,192.712L23.583,192.154L22.82,184.367L22.063,183.809L22.063,178.803L22.82,178.245L22.82,176.021L24.346,173.231L24.727,170.449L26.628,167.108L26.628,164.326L28.148,163.218L30.049,160.436L30.389,157.989L31.146,156.758L29.668,154.862L30.77,149.075L29.6,147.271L30.655,145.406L30.655,142.615L29.668,140.39L30.812,138.724L30.812,137.607L28.148,132.041L28.529,130.925L28.148,125.916L25.866,122.574L25.176,117.451L23.583,115.333L24.346,111.44L22.711,109.757L24.685,106.423L24.727,104.197L24.387,99.968L22.444,92.502L20.992,89.718L19.399,89.16L17.571,86.704L15.519,85.159L14.708,85.121L13.654,87.071L12.217,86.046L8.368,85.144L7.61,84.149L7.61,83.033L6.085,80.807L6.466,80.248L6.085,78.022L7.636,73.562L6.582,71.335L6.582,69.117L8.666,63.983L8.707,62.192L14.208,57.403L14.656,56.063L13.889,55.207L14.077,54.174L14.834,53.516L14.834,52.391L16.892,47.654L19.018,44.593L19.399,42.358L18.637,40.69L18.637,39.014L20.162,36.787L20.162,35.67L21.3,35.119L23.202,32.333L23.964,32.333L25.103,31.216L26.247,31.216L26.628,31.774L28.911,28.43L30.347,30.183L30.708,26.432L32.332,25.085L33.095,25.085L34.996,27.986L35.231,26.203L38.417,23.409L40.204,23.271L44.575,27.978L46.403,27.534L46.941,25.743L48.571,26.019L49.261,24.09L51.35,23.967L55.152,20.071L57.816,21.182L59.718,17.836L59.336,16.168L61.238,13.94L64.283,13.94L65.421,12.823L67.704,12.823L71.506,7.809L72.269,7.809L74.552,5.015L76.072,4.463L78.354,2.228L81.394,1.677L82.157,0L82.919,0L87.103,3.346L86.341,6.691L86.722,8.918L85.959,11.146L87.479,17.278L86.341,22.857L87.479,23.967L86.341,25.644L84.821,25.085L84.058,26.203L81.394,27.871L79.874,27.871L79.117,28.988L77.592,28.988L74.552,31.216L73.408,32.884L72.269,32.333L69.224,32.884L64.659,38.463L62,42.917L61.619,44.035L62,45.144L60.856,46.82L60.365,46.59L58.845,47.822L57.816,47.378L56.672,49.047L53.857,51.266L52.107,50.723L48.686,54.618L45.646,55.176L45.265,55.734L42.601,55.176L41.081,56.293L36.516,56.293L36.516,55.734L34.996,56.293L34.615,57.961L33.471,58.52L33.471,62.422L34.233,63.531L33.852,69.109L34.615,74.679L36.897,81.916L39.18,84.7L41.081,86.375L41.838,86.375L42.601,87.492L42.601,89.16L46.022,94.17L47.923,94.729L50.587,98.629L52.87,98.071L52.87,99.746L51.731,101.972L50.969,102.53L48.686,102.53L48.305,103.081L46.022,102.53L45.646,101.972L45.265,102.53L42.601,102.53L42.22,103.081L37.654,102.53L36.897,103.303L34.5,103.417L33.742,102.408L32.567,102.186L28.488,102.53L28.033,103.081L28.148,109.765L27.386,111.991L28.911,113.666L30.049,116.449L32.713,127.033L32.713,130.366L33.471,132.041L33.471,138.724L34.118,142.615L33.852,154.862L34.615,155.42L35.753,154.312L36.135,150.413L38.798,146.514L38.417,144.29L39.18,142.064L38.036,139.832L38.036,138.166L38.798,136.491L41.838,131.483L46.785,125.916L48.039,123.683L48.529,123.683L52.87,116.449L54.014,111.44L53.518,106.507L52.05,104.174L52.431,103.616L54.124,104.526L57.127,102.193L60.475,100.855L61.238,99.188L64.283,96.403L66.941,95.845L67.704,94.729L69.986,95.287L70.749,94.17L71.506,94.17L73.408,92.502L76.453,91.944L81.018,94.729L82.157,94.729L82.538,94.17L84.439,94.729L94.327,104.756L99.655,106.981L100.412,108.098L103.457,107.54L116.009,125.358L116.766,124.8L118.292,125.358L120.95,128.699L123.995,130.366L125.134,132.041L125.896,132.599L127.798,132.599L132.363,136.491L135.408,138.166L138.448,138.724L139.592,140.39L140.349,140.39L141.493,141.507L144.533,142.064L145.677,143.731L148.717,145.406L152.901,146.514L155.564,148.188L158.986,148.188L161.649,149.855L163.169,149.855L165.071,151.529L170.017,152.08L170.78,153.196L173.82,152.638L176.484,153.754L179.905,152.638L181.049,154.312L183.332,154.312L186.752,155.979L188.654,155.979L190.174,157.653L190.937,157.653L192.457,159.877L193.977,159.877L194.358,160.436L195.501,160.436L195.883,159.877L196.64,160.986L198.923,161.544L200.067,162.66L201.206,162.66L201.968,163.776L201.968,167.108L203.488,169.34L204.25,168.782L206.528,169.898L208.435,168.225L208.811,168.782L208.435,171.007L209.955,174.347L209.955,183.809L210.712,186.59L210.336,188.814L211.093,190.488L210.712,191.596L211.093,196.609L211.855,198.275L211.475,201.057L210.336,203.288L210.336,205.511L212.618,208.85L215.277,209.958L215.277,213.855L214.52,214.97L213.375,214.97L211.855,216.636L209.573,221.09L211.093,223.871L209.955,224.429L204.626,236.109L201.968,240.555L202.344,243.335L201.587,244.45L201.587,246.123L195.883,258.908L195.501,261.688L192.838,268.362L191.318,276.708L188.654,282.268L187.134,292.827L185.609,295.056L184.47,295.056L182.188,298.942L181.425,298.942L180.286,301.721L177.623,305.057L176.865,306.729L176.484,310.614L175.34,312.286L173.82,312.843L171.918,310.614L170.017,310.614L165.071,313.95L161.269,314.507L160.13,317.285L158.229,317.285L157.084,318.957L155.183,320.063L155.183,320.621L151.762,321.735L149.479,325.071L147.959,325.071L147.197,326.177L147.578,327.849L146.815,327.849L144.152,332.848L143.013,332.848L141.869,331.184L139.21,331.741L137.309,330.07L136.546,330.07L135.027,327.849L137.309,324.514L139.592,323.956L142.632,319.514L144.152,318.957L147.197,314.507L147.959,313.95L149.098,315.064L150.237,315.064L151.762,311.729L151.762,305.614L151,304.5L150.618,305.057L147.959,301.171L147.197,298.942L145.295,298.385L144.178,296.392L144.914,290.605L147.155,288.498L148.257,285.993L147.218,285.207L143.775,286.933L130.953,287.169L129.652,288.521L127.484,288.688L126.33,289.902L126.377,293.132L125.202,294.17L123.995,293.941L123.614,294.499L122.475,294.499L121.331,295.605L120.192,294.499L119.049,295.056L118.672,293.384L117.91,293.384L116.766,295.056L115.627,295.605L112.963,293.941L110.305,293.941L109.161,292.827L108.398,293.483L107.37,293.369L104.596,290.605L99.467,288.734L96.077,288.284L92.467,286.933L84.904,286.818L78.469,284.222L70.906,282.306L66.618,279.816L65.484,280.946L67.97,285.803L68.085,287.383L69.663,289.299L70.749,293.941L74.212,300.27L75.309,304.5L77.592,307.835L80.125,313.614L82.47,321.178L82.716,324.674L85.578,331.741L85.578,333.405L88.242,336.183L89.004,336.183L89.004,337.854L90.524,341.738L91.663,341.738L92.044,341.181L92.807,341.738L93.188,344.516L96.609,345.073L98.511,346.744L104.92,346.859L110.587,342.448L112.582,340.075L114.107,336.74L113.726,336.183L116.009,333.405L116.39,333.962L126.659,324.514L127.798,326.734L126.659,327.849L126.659,328.956L127.04,329.513L128.179,329.513L129.317,331.741L131.6,332.848L133.125,334.519L134.646,331.741L135.408,332.848L136.166,332.291L136.928,333.962L138.066,333.962L138.066,335.625L135.784,337.854L134.646,341.181L130.843,347.851L130.461,347.294L130.08,347.851L128.941,351.186L128.941,352.856L124.904,361.188L121.655,369.855L117.847,384.571L114.682,403.175L111.772,415.834L111.063,426.724L111.443,430.612L110.681,432.281L111.063,438.389L110.681,443.383L112.206,447.819L112.206,448.933L111.063,450.603L112.582,453.926L111.825,456.152L114.489,466.694L114.107,468.363L115.627,471.694L115.627,473.355L123.995,487.782L123.995,489.451L124.376,490.008L125.896,490.008L127.04,488.896L128.941,488.339L129.699,487.227L130.843,487.782L131.981,489.451L135.408,490.008L137.309,488.896L138.066,490.008L139.21,490.008L142.433,492.713L145.797,493.506L145.458,495.326L149.156,500.569L150.498,500.928L151.981,504.021L159.038,509.605L163.634,506.299L165.092,507.328L168.226,505.164L168.675,503.686L170.806,503.229L172.148,503.571L174.389,501.103L176.103,501.103L177.623,502.215L179.905,502.764L185.609,501.103L188.654,503.32L189.792,504.988L193.219,508.867L196.259,510.535L196.64,512.753L204.25,516.638L204.626,517.743L211.855,515.525L212.237,514.97L213.621,515.008L215.418,514.101L216.421,512.196L217.941,512.196L219.842,515.525L220.986,521.072L220.604,522.74L219.461,522.185L218.322,522.74L217.967,525.476L218.307,529.688L220.208,530.709L220.432,531.966L219.424,533.101L219.314,535.721L220.323,538.228L226.115,543.811L226.564,547.565L229.301,548.38L229.729,549.362L230.492,549.362L230.492,550.643L229.934,550.643L227.829,554.907L227.829,556.02L228.972,557.131L228.591,558.791L229.354,559.903L230.492,559.903L230.874,561.008L230.492,565.447L231.631,566.551L232.012,568.219L231.631,568.774L229.729,568.774L229.354,570.99L227.447,573.763L229.354,577.09L228.21,578.75L228.21,579.861L229.354,580.417L231.255,583.188L230.492,584.301L230.492,586.516L226.309,592.059L226.69,594.83L225.17,597.601L223.263,603.698L220.986,606.47L219.08,607.581L214.896,612.566L213.757,612.566L211.093,617.004L209.573,617.56L206.909,621.434L203.869,624.204L198.542,626.427L196.259,629.753L195.12,629.753L192.457,631.412L190.937,634.737L185.703,637.553L180.667,644.158L179.523,645.27L178.385,645.27L176.484,647.483L173.82,648.587L169.255,649.143L168.116,650.254L164.313,651.912L161.649,654.682L160.887,654.134L158.986,654.134L158.229,654.682L150.237,664.656L146.053,666.87L145.295,668.536L140.349,672.416L138.066,675.186L136.546,675.186L135.027,676.288L132.744,676.288L131.981,677.399L130.08,677.954L128.941,679.613L127.04,681.278L125.515,681.834L124.376,683.492L119.487,685.972L116.009,691.243L114.865,692.354L114.107,692.354L110.305,697.336L106.842,704.416L107.641,705.093L104.215,708.972L100.412,709.52L98.129,706.751L95.847,710.63L93.946,711.74L92.426,713.953L92.807,714.508L92.426,715.61L91.287,715.063L89.699,715.854L85.667,720.173L78.83,723.815L76.813,724.264L75.92,723.474L78.161,720.857L75.69,717.831L77.304,711.778L76.296,710.074L74.839,710.303L74.144,711.146L73.026,709.52L73.789,708.417L73.789,706.751L76.072,702.88L75.309,701.77L73.789,701.77L72.144,699.929L69.344,698.332L67.547,698.332L67.323,700.111L66.184,700.659L65.803,701.77L63.901,702.325L63.066,700.408L63.4,699.153L62.731,695.403L60.715,694.263L59.707,692.103L57.816,691.243L55.534,691.799L50.587,698.446L50.206,700.111L47.166,704.538L45.646,703.428L45.265,701.215L44.21,699.686L44.325,697.86L43.202,696.841L43.985,691.95L41.744,691.608L40.961,689.448L39.953,689.448L39.18,688.475L39.18,686.816L41.17,684.116L44.534,675.36L43.364,673.52L44.502,669.647L44.502,666.87L46.785,664.656L47.166,661.887L48.305,660.229L46.403,656.903L49.067,651.912L49.067,645.27L48.305,642.492L47.166,640.833L42.982,637.508L41.838,637.508L40.7,636.396L39.937,636.396L37.654,634.182L34.615,634.182z",
  "Saint-Pierre": "M331.285,640.277l0.382,0.556h3.803l0.757,1.111l2.283,0.548l2.282,1.11v0.556l-1.139,1.659l-2.282,1.111l-1.521,2.214l-1.144,0.556l-0.382,-0.556h-2.658l-0.382,0.556h-1.9l-2.283,1.11l-0.763,-0.555l-0.763,0.555h-3.039l-1.521,-1.11h-1.525l-2.658,-2.77l3.421,-3.881l1.901,-1.104h1.521l2.282,-1.111h1.144l1.139,1.111l1.145,-1.111L331.285,640.277zM328.622,657.459l1.139,1.104h0.763l5.333,6.604l2.689,2.503l0.444,-0.456l1.348,0.799l1.342,1.818l0.784,2.16l-0.444,2.274l1.688,2.123l0.219,5.454l1.661,3.469l-0.444,2.389l-0.788,0.448l0.339,1.939l-0.563,3.18l1.608,2.411l-0.392,1.11h-0.752l-1.139,1.658l-1.901,1.11l-3.045,3.871h-1.139l-2.283,2.221l-1.52,-1.11v1.665h-0.763l-1.901,1.658l-4.863,7.179l-0.109,1.476l3.14,1.141l1.452,-0.936h1.9l0.763,1.665l-0.763,1.104l-2.282,0.555l-1.901,3.323l-2.282,0.555l-0.382,2.768l-1.9,1.658v2.212l-2.283,3.323l-0.757,0.555h-3.046l-1.52,2.768l0.763,1.11h0.757l1.525,2.212l0.758,-1.103l1.901,1.657v1.657l1.144,1.11l1.52,-2.212l0.382,-2.213l1.139,0.548l1.144,-1.103l0.382,0.555l3.839,0.114l0.783,-1.255h1.232l1.233,1.141l2.8,0.548l1.139,-1.103h1.524l0.377,2.242l-2.575,1.817l-1.123,3.748l1.013,2.957l4.21,0.859l1.521,1.109l3.04,-0.555l2.664,2.212h0.762l0.758,1.11l-1.139,2.767l1.139,3.322l-0.376,2.212l-1.144,-1.11l-1.447,1.559l-3.364,1.36v1.368l-1.008,0.448l-4.45,-0.304l-1.901,2.767l-1.196,-0.281l-3.588,1.254l-3.583,-0.569l-1.123,1.246l-0.778,3.884h-1.145l-2.277,-2.212l-2.282,-0.555l-1.525,-2.212l0.763,-1.664l4.946,2.767l0.376,-1.103l-1.139,-1.664l-3.421,-1.657l-3.646,0.084l-1.009,1.368v1.36l-0.783,1.368l0.674,5.905l1.452,2.044l-0.444,3.299l-1.19,1.17l-1.499,-3.519l-1.348,-0.456l-0.894,-1.246l0.784,-1.254l-0.11,-2.614l-2.638,0.235l-2.282,1.664l-3.542,-1.011l-1.118,1.475l-0.898,-0.221l-1.792,1.133l-1.342,1.246l-0.225,1.141l-3.588,-2.615l-1.949,0.51l-0.689,-4.842l0.898,-2.387l-2.799,-3.633l0.444,-1.368l1.013,-0.221l1.515,-3.603v-3.314l-4.565,-1.109l-2.283,2.767h-0.762l-1.901,1.657l-3.04,4.432v1.657l-1.144,2.219h-2.664l-0.376,0.555l-3.426,-0.555l-1.139,0.555l-0.763,-1.109l-2.282,-1.109h-4.941l-0.763,-0.555l-0.846,0.342l-0.564,1.254l-3.024,1.36l-1.525,5.32l0.225,1.475l1.567,2.158l-0.225,1.71l-0.334,1.019l-2.351,1.14l-0.449,1.589h-0.898l-0.894,1.025v1.246l-1.348,1.816l0.324,2.455L252.55,792l-0.757,-0.555l-0.157,-1.931l-1.907,-1.815l0.339,-2.614l-1.321,-1.384h-0.757l-3.776,-2.576l-1.008,-2.948l2.502,-5.541l-0.763,-1.109h-1.901l-0.763,-1.109l1.358,-1.406v-2.614l-2.497,-0.403l-1.901,-1.665l-2.664,1.11l-3.04,2.212l-2.894,-2.6l-2.69,0.912l-3.546,-1.635l1.139,-2.212l-1.139,-2.212l1.118,-1.672l4.481,-0.114l0.789,-0.684l4.591,-1.019l-1.233,-1.141v-1.589l4.074,-2.865v-1.482l1.008,-0.677l-0.115,-2.844l2.69,-1.931l-0.235,-2.258l1.682,-1.817l-0.042,-2.304l2.7,-1.854l0.784,-2.159h0.898l0.559,-1.255h0.674l0.679,-3.338l1.52,-3.323l0.381,-6.09l2.314,-2.251l2.241,-1.027v-2.388l7.234,-10.396v-1.658l0.763,-1.11l-0.381,-0.548l1.128,-1.643l3.249,0.343l1.906,-1.369l1.567,-2.046l0.136,-3.043l1.447,-1.087l1.907,-3.302l2.909,-0.456l0.204,-1.248l0.762,-0.555h0.757l0.805,1.171l1.4,-0.494l3.505,-5.104l1.901,-7.759l2.664,-3.324l1.139,-1.104l2.69,-0.229l0.334,-0.912l2.58,-0.229l1.243,-1.4h1.139l0.381,0.548l4.184,-0.548l3.045,-2.769l2.277,0.548l1.525,-1.659h2.283l0.376,0.556l2.282,-0.556l0.382,0.556h1.144l2.282,-1.666h1.139v0.555h3.422L328.622,657.459zM374.263,715.063l-0.381,0.547l-1.521,-2.213l0.382,-1.103l1.52,-1.11h1.52l1.145,-2.213h0.757l1.145,-4.434l2.126,0.327l1.989,4.106l-1.452,4.426L374.263,715.063zM363.231,705.648h0.763l0.762,1.103l-0.381,2.221l-0.381,0.548h-1.139l-3.427,4.434l-2.282,0.555l-1.139,1.658l1.17,2.319l-1.348,2.501l-0.894,0.114l-1.348,1.476l0.136,3.559l-1.52,3.322h-1.901l-2.664,-2.212l-4.184,0.547l-1.901,-3.87l0.757,-2.768l3.046,-1.11l3.803,-3.323l0.762,-1.657l1.139,-0.556l1.145,-2.213l-0.763,-3.323l0.763,-1.11h0.757h2.283l2.663,2.213l1.139,-0.555l-1.52,-2.213l1.52,-2.214l1.145,1.658l1.52,-0.548l0.763,-1.11L363.231,705.648z"
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

// src/Stpierre.tsx
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
var Stpierre = ({
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
      StpierreSingle,
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
      StpierreMultiple,
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
var StpierreSingle = ({
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
var StpierreMultiple = ({
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
var Stpierre_default = Stpierre;

// src/index.ts
var src_default = Stpierre_default;
export {
  src_default as default
};
