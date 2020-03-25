montage -background '#fff' -define pdf:fit-page=1500x1060 -resize 375x265 -geometry +1+1 diagnosis-and-treatment.pdf diagnosis-and-treatment.png


montage \
	-density 150 \
	-background "#fff" \
	-define pdf:fit-page=1500x1060 \
	-resize 375x265 \
	-geometry +1+1 \
	advice-non-steroidal-anti-inflammatories-COVID-19.pdf \
	advice-non-steroidal-anti-inflammatories-COVID-19.png

montage \
	-tile 5x2 \
	-density 150 \
	-background "#fff" \
	-define pdf:fit-page=1500x1060 \
	-resize 375x265 \
	-geometry +1+1 \
	respiratory-support-strategy-of-severe-acute-respiratory-failure-caused-by-SARS-CoV-2-infection-in-children.pdf \
	respiratory-support-strategy-of-severe-acute-respiratory-failure-caused-by-SARS-CoV-2-infection-in-children.png


montage \
	-tile 5x4 \
	-density 150 \
	-background "#fff" \
	-define pdf:fit-page=1500x1060 \
	-resize 375x265 \
	-geometry +1+1 \
	COVID-19-clinical-update-for-pediatric-HematologyOncology-BTM-Toronto.pdf \
	COVID-19-clinical-update-for-pediatric-HematologyOncology-BTM-Toronto.png


montage \
	-tile 5x4 \
	-density 150 \
	-background "#fff" \
	-define pdf:fit-page=1500x1060 \
	-resize 375x265 \
	-geometry +1+1 \
	CoronavirusEssentialsPedsOnc2.pdf \
	CoronavirusEssentialsPedsOnc2.png

montage \
	-tile 5x2 \
	-density 150 \
	-background "#fff" \
	-define pdf:fit-page=1500x1060 \
	-resize 375x265 \
	-geometry +1+1 \
	Handbook-of-COVID-19-Prevention-and-Treatment.pdf \
	Handbook-of-COVID-19-Prevention-and-Treatment.png

montage \
	-tile 5x2 \
	-density 150 \
	-background "#fff" \
	-define pdf:fit-page=1500x1060 \
	-resize 375x265 \
	-geometry +1+1 \
	WHO-China-Joint-Mission-on-COVID-19-Final-Report.pdf \
	WHO-China-Joint-Mission-on-COVID-19-Final-Report.png


montage \
	-tile 5x2 \
	-density 150 \
	-background "#fff" \
	-define pdf:fit-page=1500x1060 \
	-resize 375x265 \
	-geometry +1+1 \
	mindkids-info-coronavirus-para-ninhos.pdf \
	mindkids-info-coronavirus-para-ninhos.png


montage \
	-tile 4x2 \
	-density 150 \
	-background "#fff" \
	-define pdf:fit-page=1500x1060 \
	-resize 375x265 \
	-geometry +1+1 \
	covid19-children.pdf \
	covid19-children.png


montage -tile 3x3 \
	-geometry +1+1 \
	iner-*.png \
	video-iner.png

montage -tile 7x2 \
	-geometry +1+1 \
	questions-on-protection-*.png \
	questions-on-protection.png


montage -background '#ffffff' -define pdf:fit-page=1500x1060 -resize 375x265 -geometry +1+1 questions-on-protection.pdf questions-on-protection.png

montage covid19-children.pdf covid19-children.png

convert input.pdf output.png

convert questions-on-protection.pdf questions-on-protection.png

convert -colorspace sRGB -density 288 input.pdf -resize 25% output.png


respiratory-support-strategy-of-severe-acute-respiratory-failure-caused-by-SARS-CoV-2-infection-in-children

Handbook-of-COVID-19-Prevention-and-Treatment.pdf

Colocacion-Retiro-equipo-de-proteción-personal-INER
