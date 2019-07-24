days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
times = ["Morning", "Afternoon", "Evening"]
i = 1
for d in days:
    for t in times:
        print ("OR (#sched[0].#time"+str(i)+" = :v"+str(i)+" AND #sched[0].#time"+str(i)+" = :vtrue) \\")
        i = i + 1
