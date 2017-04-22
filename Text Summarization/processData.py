import json, pickle

heads = []
descs = []

with open("sample-1M.jsonl") as f:
	count = 0
	for line in f:
		count +=1
		try:
			j_content = json.loads(line)
			heads.append(j_content["title"])
			descs.append(j_content["content"])
		except:
			pass

		if count >50000:
			break

print(heads[:10])
with open("plz.p","wb") as g:
    pickle.dump((heads,descs,None),g)