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
	-tile 5x2 \
	-density 150 \
	-background "#fff" \
	-define pdf:fit-page=1060x1500 \
	-resize 265x375 \
	-geometry +1+1 \
	COVID-19-Radiation-Oncology-Targeted-Response-for-Pandemic-Preparedness-copy.pdf \
	COVID-19-Radiation-Oncology-Targeted-Response-for-Pandemic-Preparedness-copy.png


montage \
	-tile 3x1 \
	-density 300 \
	-background "#fff" \
	-define pdf:fit-page=1500x1060 \
	-resize 750x530 \
	-geometry +1+1 \
	COVID-19-Health-Link_Survivors_Spanish_3.20.20.pdf \
	COVID-19-Health-Link_Survivors_Spanish_3.20.20.png

montage \
	-tile 3x1 \
	-density 300 \
	-background "#fff" \
	-define pdf:fit-page=1500x1060 \
	-resize 750x530 \
	-geometry +1+1 \
	COVID-19-and-Your-Child-with-Cancer_Spanish_3.20.20.pdf \
	COVID-19-and-Your-Child-with-Cancer_Spanish_3.20.20.png

montage \
	-tile 4x2 \
	-density 150 \
	-background "#fff" \
	-define pdf:fit-page=1500x1060 \
	-resize 375x265 \
	-geometry +1+1 \
	covid19-children.pdf \
	covid19-children.png

montage -tile 5x3 \
	-geometry +1+1 \
	preparedness-*.png \
	preparedness.png

montage -tile 4x2 \
	-geometry +1+1 \
	manos-*.png \
	correcto-lavado-manos.png

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

COVID-19-Radiation-Oncology-Targeted-Response-for-Pandemic-Preparedness.pdf
