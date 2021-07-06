SELECT a.*, 
b.salutation,b.first_name,b.last_name,b.gender,b.job_title,b.email,b.mobile,b.phone,b.ext,b.billing_address,
c.name AS install_county_name,
d.name AS install_country_name,
e.name AS lead_type_name,
f.name AS lead_source_name,
g.name AS lead_sub_source_name,
h.name AS sales_area_name,
i.name AS product_type_1_name,
j.name AS product_type_2_name,
k.name AS product_type_3_name,
l.name AS main_interest_name,
m.name AS lead_taken_by_name,
n.name AS sales_person_name,
o.name AS surveyors_name,
p.name AS pipeline_name,
q.name AS temperature_name,
r.name AS task_for_name,
s.name AS status_name
FROM leads AS a 
LEFT JOIN customers AS b ON a.customer_id=b.id 
LEFT JOIN county AS c ON a.install_county_id=c.id 
LEFT JOIN country AS d ON a.install_country_id=d.id
LEFT JOIN lead_type AS e ON a.lead_type_id=e.id
LEFT JOIN lead_source AS f ON a.lead_source_id=f.id
LEFT JOIN lead_sub_source AS g ON a.lead_sub_source_id=g.id
LEFT JOIN sales_area AS h ON a.sales_area_id=h.id
LEFT JOIN product_type AS i ON a.product_type_1_id=i.id
LEFT JOIN product_type AS j ON a.product_type_2_id=j.id
LEFT JOIN product_type AS k ON a.product_type_3_id=k.id
LEFT JOIN main_interest AS l ON a.main_interest_id=l.id
LEFT JOIN users AS m ON a.lead_taken_by_id=m.id
LEFT JOIN sales_person AS n ON a.sales_person_id=n.id
LEFT JOIN surveyors AS o ON a.surveyors_id=o.id
LEFT JOIN pipeline AS p ON a.pipeline_id=p.id
LEFT JOIN lead_temperature AS q ON a.temperature_id=q.id
LEFT JOIN users AS r ON a.task_for_id=r.id
LEFT JOIN lead_pipeline AS s ON a.status=s.id
WHERE a.id = 1


\\




SELECT a.id, a.task_for_id, r.name
FROM leads AS a
INNER JOIN users AS r ON a.task_for_id = r.id WHERE a.id = 1;

